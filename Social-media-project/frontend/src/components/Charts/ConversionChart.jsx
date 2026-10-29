import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
import { Typography, CircularProgress, Card } from "@mui/material";
import "../../css/style.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

const ConversionChart = () => {
  const [regionsData, setRegionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegionPerformance = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:5000/api/region-performance"
        );
        setRegionsData(response.data);
      } catch (err) {
        setError("Failed to fetch region data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRegionPerformance();
  }, []);

  const chartData = {
    labels: regionsData.map((data) => data.region),
    datasets: [
      {
        label: "Conversions",
        data: regionsData.map((data) => data.conversions),
        backgroundColor: "rgb(192, 75, 75)", 
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Region",
          color: "white", 
        },
        ticks: {
          color: "white", 
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Conversions",
          color: "white", 
        },
        ticks: {
          color: "white", 
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white", 
        },
      },
      datalabels: {
        display: false, 
      },
    },
  };

  return (
    <Card
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "black", 
      }}
    >
      <Typography
        variant="h6"
        style={{
          marginBottom: "10px",
          color: "white", 
        }}
      >
        Region Conversions
      </Typography>
      {loading ? (
        <div
          className="loading-message"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CircularProgress />
          <Typography
            variant="body1"
            style={{ marginTop: "10px", color: "white" }}
          >
            Loading data...
          </Typography>
        </div>
      ) : error ? (
        <div className="error-message" style={{ color: "red" }}>
          {error}
        </div>
      ) : (
        <div
          style={{
            height: "400px",
            width: "450px",
            margin: "0 auto", 
            backgroundColor: "black", 
          }}
        >
          <Bar
            data={chartData}
            options={chartOptions}
            height={400}
            width={450}
          />
        </div>
      )}
    </Card>
  );
};

export default ConversionChart;
