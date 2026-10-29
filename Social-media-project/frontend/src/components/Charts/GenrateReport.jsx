// import React, { useState } from "react";
// import {
//   CircularProgress,
//   Typography,
//   Button,
//   Card,
//   Grid,
// } from "@mui/material";
// import axios from "axios";
// import "../../css/style.css";

// const GenrateReport = () => {
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const url = "http://localhost:5000/api/generate-report"; // Adjust this to your actual endpoint

//   // Function to fetch the report data
//   const fetchReportData = async () => {
//     setLoading(true);
//     setError(""); // Clear any previous error
//     try {
//       const response = await axios.get(url);
//       if (response.data && response.data.report) {
//         setReportData(response.data.report);
//       } else {
//         setError("Report data is missing.");
//       }
//     } catch (error) {
//       console.error("Error generating report:", error);
//       setError(
//         error.response
//           ? error.response.data.error
//           : "Failed to generate report."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card className="card container">
//       <Typography variant="h6" className="typography-heading">
//         Generate Report
//       </Typography>

//       <div className="button-container">
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={fetchReportData}
//           disabled={loading}
//         >
//           Generate Report
//         </Button>
//       </div>

//       {loading && (
//         <div className="loading-container">
//           <CircularProgress />
//           <Typography className="loading-text">Generating report...</Typography>
//         </div>
//       )}

//       {error && (
//         <Typography color="error" className="typography-text">
//           {error}
//         </Typography>
//       )}

//     {!loading && reportData.length > 0 && (
//   <Grid container spacing={3}>
//     <Grid item xs={12}>
//       <div className="typography-subheading">
//         <Typography variant="h5">Generated Report</Typography>
//         <table className="table-container">
//           <thead>
//             <tr>
//               <th className="table-cell">Region</th>
//               <th className="table-cell">Total Clicks</th>
//               <th className="table-cell">Total Impressions</th>
//               <th className="table-cell">Total Conversions</th>
//               <th className="table-cell">CTR (%)</th>
//               <th className="table-cell">Conversion Rate (%)</th>
//               <th className="table-cell">Top Ad</th>
//               <th className="table-cell">Age Group Insights</th>
//               <th className="table-cell">Time Spent (min)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reportData.map((row, index) => (
//               <tr key={index}>
//                 <td className="table-cell">{row.region}</td>
//                 <td className="table-cell">{row.totalClicks}</td>
//                 <td className="table-cell">{row.totalImpressions}</td>
//                 <td className="table-cell">{row.totalConversions}</td>
//                 <td className="table-cell">
//                   {row.ctr && !isNaN(row.ctr) ? row.ctr.toFixed(2) : 'N/A'}
//                 </td>
//                 <td className="table-cell">
//                   {row.conversionRate && !isNaN(row.conversionRate) ? row.conversionRate.toFixed(2) : 'N/A'}
//                 </td>
//                 <td className="table-cell">{row.topAd}</td>
//                 <td className="table-cell">
//                   {row.ageGroupInsights.map((insight, i) => (
//                     <div key={i}>
//                       <strong>{insight.ageGroup}: </strong>
//                       CTR: {insight.ageCTR && !isNaN(insight.ageCTR) ? insight.ageCTR.toFixed(2) : 'N/A'}%, 
//                       Engagement: {insight.engagementRate && !isNaN(insight.engagementRate) ? insight.engagementRate.toFixed(2) : 'N/A'}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="table-cell">
//                   {row.timeSpent && !isNaN(row.timeSpent) ? row.timeSpent.toFixed(2) : 'N/A'}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Grid>
//   </Grid>
// )}


//     </Card>
//   );
// };




import React, { useState } from "react";
import {
  CircularProgress,
  Typography,
  Button,
  Card,
  Grid,
} from "@mui/material";
import axios from "axios";
import "../../css/style.css";

const GenrateReport = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "http://localhost:5000/api/generate-report"; // Adjust this to your actual endpoint

  // Function to fetch the report data
  const fetchReportData = async () => {
    setLoading(true);
    setError(""); // Clear any previous error
    try {
      const response = await axios.get(url);
      if (response.data && response.data.report) {
        setReportData(response.data.report);
      } else {
        setError("Report data is missing.");
      }
    } catch (error) {
      console.error("Error generating report:", error);
      setError(
        error.response
          ? error.response.data.error
          : "Failed to generate report."
      );
    } finally {
      setLoading(false);
    }
  };

  // Function to handle downloading the entire report
  const downloadFullReport = () => {
    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `full_report.json`;
    link.click();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Aligns content at the top initially
        height: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "20px",
        paddingTop: "80px", // Ensure this matches your navbar height (e.g., 80px)
        overflowY: "auto", // Allow scrolling if content exceeds the viewport
      }}
    >
      <Card
        sx={{
          padding: "2rem",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "800px", // Center the card with a max width
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            marginBottom: "20px",
            textAlign: "center",
            color: "#1976d2",
          }}
        >
          Generate Report
        </Typography>

        <div
          sx={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={fetchReportData}
            disabled={loading}
            sx={{
              padding: "12px 24px",
              fontWeight: 600,
              fontSize: "16px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s",
              '&:hover': {
                backgroundColor: "#1565c0", // Darker blue on hover
              }
            }}
          >
            Generate Report
          </Button>
        </div>

        {loading && (
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <CircularProgress />
            <Typography
              sx={{
                marginTop: "12px",
                fontSize: "16px",
                color: "#1976d2",
              }}
            >
              Generating report...
            </Typography>
          </div>
        )}

        {error && (
          <Typography
            color="error"
            sx={{
              fontSize: "16px",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {error}
          </Typography>
        )}

        {!loading && reportData.length > 0 && (
          <div>
            <Typography
              variant="h5"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                marginBottom: "16px",
                color: "#333",
                textAlign: "center",
              }}
            >
              Generated Report
            </Typography>
            <Grid container spacing={3}>
              {reportData.map((data, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      padding: "16px",
                      backgroundColor: "#fafafa",
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      marginBottom: "16px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        color: "#1976d2",
                      }}
                    >
                      Region: {data.region}
                    </Typography>
                    <Typography>Total Clicks: {data.totalClicks}</Typography>
                    <Typography>Total Impressions: {data.totalImpressions}</Typography>
                    <Typography>Total Conversions: {data.totalConversions}</Typography>
                    <Typography>
                      CTR (%): {data.ctr && !isNaN(data.ctr) ? data.ctr.toFixed(2) : "N/A"}
                    </Typography>
                    <Typography>
                      Conversion Rate (%):
                      {data.conversionRate && !isNaN(data.conversionRate)
                        ? data.conversionRate.toFixed(2)
                        : "N/A"}
                    </Typography>
                    <Typography>Top Ad: {data.topAd}</Typography>
                    <Typography>Age Group Insights:</Typography>
                    {data.ageGroupInsights.map((insight, i) => (
                      <div key={i}>
                        <Typography>
                          - {insight.ageGroup}: CTR: {insight.ageCTR && !isNaN(insight.ageCTR) ? insight.ageCTR.toFixed(2) : "N/A"}%
                        </Typography>
                      </div>
                    ))}
                  </Card>
                </Grid>
              ))}
            </Grid>
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={downloadFullReport}
                sx={{
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontSize: "16px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s",
                  '&:hover': {
                    backgroundColor: "#388e3c", // Darker green on hover
                  }
                }}
              >
                Download Full Report
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default GenrateReport;
