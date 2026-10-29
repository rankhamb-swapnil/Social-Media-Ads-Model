
import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Typography,
  Select,
  MenuItem,
  Card,
  Grid,
} from "@mui/material";
import axios from "axios";
import "../../css/style.css";

const BudgetOptimization = () => {
  const [budgetRecommendations, setBudgetRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [budgetError, setBudgetError] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Select Region");
  const [regions, setRegions] = useState([]);

  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://your-production-backend-url.com/api"
      : "http://localhost:5000/api";

  // Fetch available regions 
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get(`${baseURL}/budget-optimization`, {
          params: { region: "" }, // Fetch data for all regions to determine available regions
        });
        const allRegions = response.data.regions;
        setRegions(allRegions); // Save all regions for dropdown
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  // Fetch budget recommendations based on the selected region
  useEffect(() => {
    const fetchRecommendations = async () => {
      if (selectedRegion !== "Select Region") {
        setLoading(true);
        try {
          const response = await axios.get(`${baseURL}/budget-optimization`, {
            params: { region: selectedRegion },
          });

          setBudgetRecommendations(response.data.recommendations || []);
          setBudgetError("");
        } catch (error) {
          console.error("Error fetching recommendations:", error);
          setBudgetError(
            error.response?.data?.message || "Failed to load recommendations."
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRecommendations();
  }, [selectedRegion]);

  return (
    <Card className="card container">
      <Typography variant="h6" className="typography-heading">
        Budget Optimization
      </Typography>

     
      <div className="select-dropdown">
        <Select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <MenuItem value="Select Region">Select Region</MenuItem>
          {regions.map((region, index) => (
            <MenuItem key={index} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* Loading and Error Messages */}
      {loading && (
        <div className="loading-container">
          <CircularProgress />
          <Typography className="loading-text">
            Loading recommendations...
          </Typography>
        </div>
      )}

      {budgetError && (
        <Typography color="error" className="typography-text">
          {budgetError}
        </Typography>
      )}

      {!loading && budgetRecommendations.length > 0 ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="typography-subheading">
              <Typography variant="h5">
                Budget Recommendations for {selectedRegion}
              </Typography>
              <table className="table-container">
                <thead>
                  <tr>
                    <th className="table-cell">Ad Name</th>
                    <th className="table-cell">CTR (%)</th>
                    <th className="table-cell">Before Budget</th>
                    <th className="table-cell">Action</th>
                    <th className="table-cell">Recommended Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetRecommendations.map((rec, index) => (
                    <tr key={index}>
                      <td className="table-cell">{rec.Ad_name}</td>
                      <td className="table-cell">{rec.CTR}</td>
                      <td className="table-cell">${rec.BeforeBudget}</td>
                      <td className="table-cell">{rec.Action}</td>
                      <td className="table-cell">${rec.RecommendedBudget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Grid>
        </Grid>
      ) : (
        !loading && !budgetError && <Typography></Typography>
      )}
    </Card>
  );
};

export default BudgetOptimization;
