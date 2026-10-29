


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Select, MenuItem, FormControl } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AdTimePerformance = () => {
  const [adData, setAdData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdTimePerformance = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/ad-time-performance`
        );
        console.log("Fetched Ad Data:", response.data);
        setAdData(response.data);

        const uniqueRegions = [
          ...new Set(
            response.data.flatMap((item) =>
              item.regions.map((regionData) => regionData.region)
            )
          ),
        ];
        setRegions(uniqueRegions);

        if (uniqueRegions.length > 0) {
          setSelectedRegion(uniqueRegions[0]);
        }
      } catch (err) {
        setError("Failed to fetch ad time data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdTimePerformance();
  }, []);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const filteredData = selectedRegion
    ? adData.filter((ad) =>
        ad.regions.some((region) => region.region === selectedRegion)
      )
    : adData;

  const aggregatedData = filteredData.map((ad) => ({
    adName: ad.adName,
    totalTimeSpent: ad.regions.reduce(
      (sum, region) =>
        sum + (region.region === selectedRegion ? region.timeSpent : 0),
      0
    ),
  }));

  const chartData = {
    labels: aggregatedData.map((ad) => ad.adName),
    datasets: [
      {
        label: "Total Time Spent (mins)",
        data: aggregatedData.map((ad) => ad.totalTimeSpent),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "rgba(255, 255, 255, 1)",
        pointBorderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, 
    scales: {
      x: {
        title: { display: true, text: "Ads", color: "white" },
        ticks: { color: "white" },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
      y: {
        title: { display: true, text: "Time Spent (mins)", color: "white" },
        beginAtZero: true,
        ticks: { color: "white" },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", 
        },
      },
    },
    plugins: {
      legend: { display: true, position: "top", labels: { color: "white" } },
  
      datalabels: { display: false }, // disable data labels if needed
    },
  };

  return (
    <div
      className="ad-time-performance-container"
      style={{
        backgroundColor: "black",
        color: "white",
        height: "385px", 
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "space-between", 
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ textAlign: "left", margin: 0 }}>Ad Time Performance:</h2>
        <FormControl style={{ width: "120px" }}>
          <Select
            value={selectedRegion}
            onChange={handleRegionChange}
            displayEmpty
            style={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
            }}
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "black", 
                  color: "white", 
                },
              },
            }}
          >
            {regions.length > 0 ? (
              regions.map((regionName) => (
                <MenuItem
                  key={regionName}
                  value={regionName}
                  style={{ color: "white" }}
                >
                  {regionName}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled style={{ color: "white" }}>
                No regions available
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </div>

      <div
        style={{
          flex: 1,
          maxHeight: "calc(100% - 60px)", 
          overflowY: "auto",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : adData.length === 0 ? (
          <p>No data available for the selected region.</p>
        ) : (
          <div style={{ width: "100%", height: "100%" }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdTimePerformance;