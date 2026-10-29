import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { CircularProgress, Typography, Card } from "@mui/material";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Generate random colors for chart regions
  const generateColors = (count) => {
    return Array.from({ length: count }, (_, i) => 
      `hsl(${(i * 50) % 360}, 70%, 60%)`
    );
  };

  useEffect(() => {
    const fetchBudgetData = async () => {
      setLoading(true);
      setErrorMessage("");

      try {
        // Call the API endpoint to fetch budget data by region
const response = await axios.get("http://localhost:5000/api/budget-by-regions");
        const data = response.data;

        console.log("API Data:", data); // Log the data from the API

        if (data && Array.isArray(data) && data.length > 0) {
          const colors = generateColors(data.length);

          const budgets = data.map((item) => parseFloat(item.budget) || 0);
          const hasBudget = budgets.some((b) => b > 0);

          if (!hasBudget) {
            setErrorMessage("No valid budget data available.");
            return;
          }

          // Prepare data for the donut chart
          const preparedData = {
            labels: data.map((item) => item.region),
            datasets: [
              {
                label: "Budget Allocated",
                data: budgets,
                backgroundColor: colors,
                hoverOffset: 6,
              },
            ],
          };

          setChartData(preparedData);
        } else {
          setErrorMessage("No data available from API.");
        }
      } catch (error) {
        console.error("Error fetching budget data:", error);
        setErrorMessage(error.response?.data?.message || "Error fetching data from API.");
      } finally {
        setLoading(false);
      }
    };

    fetchBudgetData();
  }, []);

  const chartOptions = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff", // White text for better contrast
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Card style={{ padding: "20px", textAlign: "center", backgroundColor: "black", borderRadius: "10px" }}>
      <Typography variant="h6" gutterBottom style={{ color: "white" }}>
        Budget Allocated by Region
      </Typography>

      {loading && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <CircularProgress color="secondary" />
          <Typography variant="body1" style={{ color: "white" }}>
            Loading data...
          </Typography>
        </div>
      )}

      {errorMessage && (
        <Typography variant="body2" style={{ color: "red", marginTop: "10px" }}>
          {errorMessage}
        </Typography>
      )}

      {chartData ? (
        <div style={{ width: "440px", height: "400px", margin: "0 auto" }}>
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      ) : (
        !loading && !errorMessage && (
          <Typography variant="body2" style={{ color: "white", marginTop: "10px" }}>
            No data available
          </Typography>
        )
      )}
    </Card>
  );
};

export default DonutChart;
