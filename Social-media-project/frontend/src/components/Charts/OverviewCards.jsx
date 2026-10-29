
import React, { useEffect, useState } from "react";
import { Card, Typography, Grid, CircularProgress } from "@mui/material";
import axios from "axios";
import "../../css/style.css"; // Import your CSS file

const OverviewCards = () => {
  const [overviewData, setOverviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchOverviewData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/global-metrics"
        );
        setOverviewData(response.data);
        setErrorMessage("");
      } catch (error) {
        console.error("Error fetching overview data:", error);
        setErrorMessage(error.response?.data?.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, []);

  if (loading) {
    return (
      <div className="overview-loading">
        <CircularProgress />
        <Typography variant="body1" style={{ color: "#d3d3d3" }}>
          Loading overview data...
        </Typography>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="overview-error">
        <Typography variant="body1" style={{ color: "#d3d3d3" }}>
          {errorMessage}
        </Typography>
      </div>
    );
  }

  if (!overviewData) {
    return (
      <Typography style={{ color: "#d3d3d3" }}>No data available.</Typography>
    );
  }

  const {
    totalReach,
    engagementRate,
    budgetSpent,
    totalAds,
    totalRegions,
    topAd,
  } = overviewData;

  // Reusable card component with inline styles for darker text
  const OverviewCard = ({ title, value, valueClass, info }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="overview-card" style={{ backgroundColor: "black" }}>
        <Typography
          variant="h6"
          className="overview-card-title"
          style={{ color: "#d3d3d3" }} 
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          className={valueClass}
          style={{
            color:
              valueClass === "overview-card-value-green"
                ? "#32cd32" 
                : valueClass === "overview-card-value-red"
                ? "#ff7f7f" 
                : valueClass === "overview-card-value-purple"
                ? "#9370db" 
                : valueClass === "overview-card-value-blue"
                ? "#87ceeb" 
                : "#d3d3d3", 
          }}
        >
          {value}
        </Typography>
        {info && (
          <Typography
            variant="body1"
            className="overview-card-info"
            style={{ color: "#a9a9a9" }} 
          >
            {info}
          </Typography>
        )}
      </Card>
    </Grid>
  );

  return (
    <Grid container spacing={3} className="overview-container">
      <OverviewCard
        title="Total Clicks"
        value={totalReach.toLocaleString()}
        valueClass="overview-card-value"
      />
      <OverviewCard
        title="Engagement Rate"
        value={`${engagementRate}%`}
        valueClass="overview-card-value-green"
      />
      <OverviewCard
        title="Budget Spent"
        value={`$${budgetSpent.toLocaleString()}`}
        valueClass="overview-card-value-red"
      />
      <OverviewCard
        title="Top Performing Region"
        value={topAd ? topAd.region || "N/A" : "No data available"}
        valueClass="overview-card-value-purple"
        info={topAd ? `Impressions: ${topAd.impressions || 0}` : ""}
      />
      <OverviewCard
        title="Total Ads"
        value={totalAds}
        valueClass="overview-card-value-blue"
      />
      <OverviewCard
        title="Total Regions"
        value={totalRegions}
        valueClass="overview-card-value-red"
      />
    </Grid>
  );
};

export default OverviewCards;
