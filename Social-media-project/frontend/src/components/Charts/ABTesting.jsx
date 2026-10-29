

import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Typography,
  Select,
  MenuItem,
  Card,
} from "@mui/material";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "../../css/style.css"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip
);

const ABTesting = () => {
  const [region, setRegion] = useState("");
  const [selectedAdA, setSelectedAdA] = useState("");
  const [selectedAdB, setSelectedAdB] = useState("");
  const [regions, setRegions] = useState([]);
  const [ads, setAds] = useState([]);
  const [abTestResults, setAbTestResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchABTestResults = async () => {
    if (!selectedAdA || !selectedAdB || !region) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/ab-test-results?region=${region}&ads=${selectedAdA},${selectedAdB}`
      );
      const { results } = response.data;
      setAbTestResults(results);
      setError("");
    } catch (err) {
      setError("Failed to fetch A/B test results.");
      setAbTestResults(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchRegionsAndAds = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/regions");
      const { regions } = response.data;
      setRegions(regions);
      setError("");

      if (regions.length > 0) {
        setRegion(regions[0]);
      }
    } catch (err) {
      setError("Failed to fetch regions.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAdsForRegion = async (region) => {
    if (!region) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/ads?region=${region}`
      );
      const { ads } = response.data;
      setAds(ads);
      setError("");

      if (ads.length > 1) {
        setSelectedAdA(ads[0]);
        setSelectedAdB(ads[1]);
      } else if (ads.length === 1) {
        setSelectedAdA(ads[0]);
        setSelectedAdB("");
      } else {
        setSelectedAdA("");
        setSelectedAdB("");
      }
    } catch (err) {
      setError("Failed to fetch ads.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegionsAndAds();
  }, []);

  useEffect(() => {
    if (region) {
      fetchAdsForRegion(region);
    }
  }, [region]);

  useEffect(() => {
    setAbTestResults(null);
    fetchABTestResults();
  }, [region, selectedAdA, selectedAdB]);

  const chartData = abTestResults
    ? {
        labels: abTestResults.map((item) => item.Ad_name),
        datasets: [
          {
            label: "Clicks",
            data: abTestResults.map((item) => item.Clicks),
            backgroundColor: "rgba(255, 165, 0, 0.8)", 
          },
          {
            label: "Impressions",
            data: abTestResults.map((item) => item.Impressions),
            backgroundColor: "rgba(0, 123, 255, 0.8)", 
          },
          {
            label: "Conversions",
            data: abTestResults.map((item) => item.Conversions),
            backgroundColor: "rgba(0, 255, 0, 0.8)", 
          },
        ],
      }
    : {};

 const chartOptions = {
   responsive: true,
   scales: {
     x: {
       title: { display: true, text: "Ads", color: "#fff" }, // White title
       ticks: { color: "#fff" }, // White ticks
       grid: {
         borderColor: "#fff", // White grid line for x-axis
         borderWidth: 2, // Set border width to make the line visible
       },
       axis: {
         borderColor: "#fff", 
         borderWidth: 2, 
       },
     },
     y: {
       title: { display: true, text: "Metrics", color: "#fff" }, // White title
       beginAtZero: true,
       ticks: { color: "#fff" }, // White ticks
       grid: {
         borderColor: "#fff", 
         borderWidth: 2, 
       },
       axis: {
         borderColor: "white", // White axis line color
         borderWidth: 2, // Set border width for y-axis line
       },
     },
   },
   plugins: {
     legend: { display: true, position: "top", labels: { color: "#fff" } },
     datalabels: {
       display: false, // Disable data labels
     },
   },
 };



  return (
    <Card
      className="barPieContainer"
      style={{ padding: "20px", backgroundColor: "black" }}
    >
      <Typography
        className="chart-title"
        variant="h6"
        style={{ marginBottom: "10px", color: "white" }}
      >
        Compare Ads
      </Typography>
      <div
        className="select-container"
        style={{ display: "flex", gap: "10px" }}
      >
        <Select
  value={region}
  onChange={(e) => setRegion(e.target.value)}
  displayEmpty
  disabled={loading}
  style={{
    minWidth: "100px",
    fontSize: "14px",
    color: "white", // White text for the selected value
    backgroundColor: "black", // Black background for the selected value
    border: "1px solid white", // White border
    borderRadius: "5px",
  }}
>
  {regions.map((regionName) => (
    <MenuItem
      key={regionName}
      value={regionName}
      style={{
        fontSize: "14px",
        color: "white", // White text for dropdown items
        backgroundColor: "black", // Black background for dropdown items
      }}
    >
      {regionName}
    </MenuItem>
  ))}
</Select>

<Select
  value={selectedAdA}
  onChange={(e) => setSelectedAdA(e.target.value)}
  disabled={loading || ads.length === 0}
  style={{
    minWidth: "100px",
    fontSize: "14px",
    color: "white", // White text for the selected value
    backgroundColor: "black", // Black background for the selected value
    border: "1px solid white", // White border
    borderRadius: "5px",
  }}
>
  {ads.map((ad) => (
    <MenuItem
      key={ad}
      value={ad}
      style={{
        fontSize: "14px",
        color: "white", // White text for dropdown items
        backgroundColor: "black", // Black background for dropdown items
      }}
    >
      {ad}
    </MenuItem>
  ))}
</Select>

<Select
  value={selectedAdB}
  onChange={(e) => setSelectedAdB(e.target.value)}
  disabled={loading || ads.length === 0}
  style={{
    minWidth: "100px",
    fontSize: "14px",
    color: "white", // White text for the selected value
    backgroundColor: "black", // Black background for the selected value
    border: "1px solid white", // White border
    borderRadius: "5px",
  }}
>
  {ads.map((ad) => (
    <MenuItem
      key={ad}
      value={ad}
      style={{
        fontSize: "14px",
        color: "white", // White text for dropdown items
        backgroundColor: "black", // Black background for dropdown items
      }}
    >
      {ad}
    </MenuItem>
  ))}
</Select>


      </div>
      {loading && (
        <div className="loading-message">
          <CircularProgress />
          <Typography variant="body1" style={{ color: "white" }}>
            Loading data...
          </Typography>
        </div>
      )}
      {error && (
        <div className="error-message" style={{ color: "red" }}>
          {error}
        </div>
      )}
      {abTestResults && (
        <div
          className="chart-container"
          style={{ height: "465px", width: "450px" }}
        >
          <Bar
            data={chartData}
            options={chartOptions}
            height={400}
            width={440}
          />
        </div>
      )}
    </Card>
  );
};

export default ABTesting;
