// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   Typography,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   CircularProgress,
// } from "@mui/material";

// const TableView = () => {
//   const [data, setData] = useState([]);
//   const [regions, setRegions] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   // Fetch data based on the selected region
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5000/api/data", {
//         params: { region: selectedRegion },
//       });
//       setData(response.data);

//       // Populate regions if not already populated
//       if (!regions.length) {
//         const uniqueRegions = Array.from(
//           new Set(response.data.map((row) => row.Region || "Unknown"))
//         );
//         setRegions(["All", ...uniqueRegions]);
//       }
//     } catch (error) {
//       setError("Failed to load data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data when the selected region changes
//   useEffect(() => {
//     fetchData();
//   }, [selectedRegion]);

//   // Pagination handlers
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Card style={{ backgroundColor: 'black', color: 'white', padding: '16px', borderRadius: '8px' }}>
//       <Typography variant="h6" style={{ marginBottom: '16px', color: 'white', textAlign: 'center' }}>
//         Data Table
//       </Typography>
//       <Select
//         value={selectedRegion}
//         onChange={(e) => setSelectedRegion(e.target.value)}
//         style={{
//           marginBottom: '16px',
//           color: 'white',
//           backgroundColor: '#333',
//         }}
//       >
//         {regions.map((region, index) => (
//           <MenuItem key={index} value={region}>
//             {region}
//           </MenuItem>
//         ))}
//       </Select>

//       {loading ? (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//           <CircularProgress />
//           <Typography>Loading data...</Typography>
//         </div>
//       ) : error ? (
//         <Typography color="error">{error}</Typography>
//       ) : (
//         <TableContainer style={{ height: '600px', overflow: 'auto' }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ color: 'white' }}>Region</TableCell>
//                 <TableCell style={{ color: 'white' }}>Ad Name</TableCell>
//                 <TableCell style={{ color: 'white' }}>Clicks</TableCell>
//                 <TableCell style={{ color: 'white' }}>Impressions</TableCell>
//                 <TableCell style={{ color: 'white' }}>Conversions</TableCell>
//                 <TableCell style={{ color: 'white' }}>Budget_Allocated</TableCell>
//                 <TableCell style={{ color: 'white' }}>Engagement</TableCell>
//                 <TableCell style={{ color: 'white' }}>Age Group</TableCell>
//                 <TableCell style={{ color: 'white' }}>Date</TableCell>
//                 <TableCell style={{ color: 'white' }}>Time Spent</TableCell>
//               </TableRow>
//             </TableHead>
//            <TableBody>
//   {data
//     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     .map((row, index) => {
//       console.log(row); // Log the row data to debug

//       return (
//         <TableRow key={index}>
//           <TableCell style={{ color: 'white' }}>{row.Region || "Unknown"}</TableCell>
//           <TableCell style={{ color: 'white' }}>{row.Ad_name || "N/A"}</TableCell>
//           <TableCell style={{ color: 'white' }}>{row.Clicks || "N/A"}</TableCell>
//           <TableCell style={{ color: 'white' }}>{row.Impressions || "N/A"}</TableCell>
//           <TableCell style={{ color: 'white' }}>{row.Conversions || "N/A"}</TableCell>
//           <TableCell style={{ color: 'white' }}>{row.Budget_Allocated || "N/A"}</TableCell>

         
//           <TableCell style={{ color: 'white' }}>
//             {row.Engagement || "N/A"}
//           </TableCell>
//           <TableCell style={{ color: 'white' }}>
//             {row["Age Group"] || "N/A"}  {/* Update to use the exact column name */}
//           </TableCell>
//           <TableCell style={{ color: 'white' }}>
//             {row.Date || "N/A"}
//           </TableCell>
//           <TableCell style={{ color: 'white' }}>
//             {row["time_spent(sec,min)"] || "N/A"}
//           </TableCell>
//         </TableRow>
//       );
//     })}
// </TableBody>

//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 50]}
//             component="div"
//             count={data.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//       )}
//     </Card>
//   );
// };

// export default TableView;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   Typography,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   CircularProgress,
// } from "@mui/material";

// const TableView = () => {
//   const [data, setData] = useState([]);
//   const [regions, setRegions] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   // Fetch data based on the selected region
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5000/api/data", {
//         params: { region: selectedRegion },
//       });
//       setData(response.data);

//       // Populate regions if not already populated
//       if (!regions.length) {
//         const uniqueRegions = Array.from(
//           new Set(response.data.map((row) => row.Region || "Unknown"))
//         );
//         setRegions(["All", ...uniqueRegions]);
//       }
//     } catch (error) {
//       setError("Failed to load data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data when the selected region changes
//   useEffect(() => {
//     fetchData();
//   }, [selectedRegion]);

//   // Pagination handlers
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Card style={{ backgroundColor: "black", color: "white", padding: "16px", borderRadius: "8px" }}>
//       <Typography
//         variant="h6"
//         style={{ marginBottom: "16px", color: "white", textAlign: "center" }}
//       >
//         Data Table
//       </Typography>
//       <Select
//         value={selectedRegion}
//         onChange={(e) => setSelectedRegion(e.target.value)}
//         style={{
//           marginBottom: "16px",
//           color: "white",
//           backgroundColor: "#333",
//         }}
//       >
//         {regions.map((region, index) => (
//           <MenuItem key={index} value={region}>
//             {region}
//           </MenuItem>
//         ))}
//       </Select>

//       {loading ? (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
//           <CircularProgress />
//           <Typography>Loading data...</Typography>
//         </div>
//       ) : error ? (
//         <Typography color="error">{error}</Typography>
//       ) : (
//         <TableContainer style={{ height: "600px", overflow: "auto" }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ color: "white" }}>Region</TableCell>
//                 <TableCell style={{ color: "white" }}>Ad Name</TableCell>
//                 <TableCell style={{ color: "white" }}>Clicks</TableCell>
//                 <TableCell style={{ color: "white" }}>Impressions</TableCell>
//                 <TableCell style={{ color: "white" }}>Conversions</TableCell>
//                 <TableCell style={{ color: "white" }}>Budget Allocated</TableCell>
//                 <TableCell style={{ color: "white" }}>Engagement</TableCell>
//                 <TableCell style={{ color: "white" }}>Age Group</TableCell>
//                 <TableCell style={{ color: "white" }}>Date</TableCell>
//                 <TableCell style={{ color: "white" }}>Time Spent</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell style={{ color: "white" }}>{row.Region}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Ad_name}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Clicks}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Impressions}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Conversions}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Budget_Allocated}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Engagement}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Age_Group}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Date}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row["time_spent(sec,min)"]}</TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 50]}
//             component="div"
//             count={data.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//       )}
//     </Card>
//   );
// };

// export default TableView;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   Typography,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   CircularProgress,
// } from "@mui/material";

// const TableView = () => {
//   const [data, setData] = useState([]);
//   const [regions, setRegions] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalRows, setTotalRows] = useState(0);

//   // Fetch data based on the selected region
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5000/api/data", {
//         params: { region: selectedRegion, page, rowsPerPage },
//       });
//       setData(response.data.records);
//       setTotalRows(response.data.totalCount);

//       // Populate regions if not already populated
//       if (!regions.length) {
//         const uniqueRegions = Array.from(
//           new Set(response.data.records.map((row) => row.Region || "Unknown"))
//         );
//         setRegions(["All", ...uniqueRegions]);
//       }
//     } catch (error) {
//       setError("Failed to load data.");
//       console.error("API Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data when the selected region or page changes
//   useEffect(() => {
//     fetchData();
//   }, [selectedRegion, page, rowsPerPage]);

//   // Pagination handlers
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Card style={{ backgroundColor: "black", color: "white", padding: "16px", borderRadius: "8px" }}>
//       <Typography
//         variant="h6"
//         style={{ marginBottom: "16px", color: "white", textAlign: "center" }}
//       >
//         Data Table
//       </Typography>
//       <Select
//         value={selectedRegion}
//         onChange={(e) => setSelectedRegion(e.target.value)}
//         style={{
//           marginBottom: "16px",
//           color: "white",
//           backgroundColor: "#333",
//         }}
//       >
//         {regions.map((region, index) => (
//           <MenuItem key={index} value={region}>
//             {region}
//           </MenuItem>
//         ))}
//       </Select>

//       {loading ? (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
//           <CircularProgress />
//           <Typography>Loading data...</Typography>
//         </div>
//       ) : error ? (
//         <Typography color="error">{error}</Typography>
//       ) : (
//         <TableContainer style={{ height: "600px", overflow: "auto" }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ color: "white" }}>Region</TableCell>
//                 <TableCell style={{ color: "white" }}>Ad Name</TableCell>
//                 <TableCell style={{ color: "white" }}>Clicks</TableCell>
//                 <TableCell style={{ color: "white" }}>Impressions</TableCell>
//                 <TableCell style={{ color: "white" }}>Conversions</TableCell>
//                 <TableCell style={{ color: "white" }}>Budget Allocated</TableCell>
//                 <TableCell style={{ color: "white" }}>Engagement</TableCell>
//                 <TableCell style={{ color: "white" }}>Age Group</TableCell>
//                 <TableCell style={{ color: "white" }}>Date</TableCell>
//                 <TableCell style={{ color: "white" }}>Time Spent</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell style={{ color: "white" }}>{row.Region}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Ad_name}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Clicks}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Impressions}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Conversions}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Budget_Allocated}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Engagement}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Age_Group}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Date}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row["time_spent(sec,min)"]}</TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 50]}
//             component="div"
//             count={totalRows}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//       )}
//     </Card>
//   );
// };

// export default TableView;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   Typography,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   CircularProgress,
// } from "@mui/material";

// const TableView = () => {
//   const [data, setData] = useState([]);
//   const [regions, setRegions] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalRows, setTotalRows] = useState(0);

//   // Fetch data based on the selected region
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5000/api/data", {
//         params: { region: selectedRegion, page, rowsPerPage },
//       });
//       setData(response.data.records);
//       setTotalRows(response.data.totalCount);

//       // Populate regions if not already populated
//       if (!regions.length) {
//         const uniqueRegions = Array.from(
//           new Set(response.data.records.map((row) => row.Region || "Unknown"))
//         );
//         setRegions(["All", ...uniqueRegions]);
//       }
//     } catch (error) {
//       setError("Failed to load data.");
//       console.error("API Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data when the selected region or page changes
//   useEffect(() => {
//     fetchData();
//   }, [selectedRegion, page, rowsPerPage]);

//   // Pagination handlers
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Card style={{ backgroundColor: "black", color: "white", padding: "16px", borderRadius: "8px" }}>
//       <Typography
//         variant="h6"
//         style={{ marginBottom: "16px", color: "white", textAlign: "center" }}
//       >
//         Data Table
//       </Typography>
//       <Select
//         value={selectedRegion}
//         onChange={(e) => setSelectedRegion(e.target.value)}
//         style={{
//           marginBottom: "16px",
//           color: "white",
//           backgroundColor: "#333",
//         }}
//       >
//         {regions.map((region, index) => (
//           <MenuItem key={index} value={region}>
//             {region}
//           </MenuItem>
//         ))}
//       </Select>

//       {loading ? (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
//           <CircularProgress />
//           <Typography>Loading data...</Typography>
//         </div>
//       ) : error ? (
//         <Typography color="error">{error}</Typography>
//       ) : (
//         <TableContainer style={{ height: "600px", overflow: "auto" }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ color: "white" }}>Region</TableCell>
//                 <TableCell style={{ color: "white" }}>Ad Name</TableCell>
//                 <TableCell style={{ color: "white" }}>Clicks</TableCell>
//                 <TableCell style={{ color: "white" }}>Impressions</TableCell>
//                 <TableCell style={{ color: "white" }}>Conversions</TableCell>
//                 <TableCell style={{ color: "white" }}>Budget Allocated</TableCell>
//                 <TableCell style={{ color: "white" }}>Engagement</TableCell>
//                 <TableCell style={{ color: "white" }}>Age Group</TableCell>
//                 <TableCell style={{ color: "white" }}>Date</TableCell>
//                 <TableCell style={{ color: "white" }}>Time Spent</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell style={{ color: "white" }}>{row.Region}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Ad_name}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Clicks}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Impressions}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Conversions}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Budget_Allocated}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Engagement}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Age_Group}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.Date}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row["time_spent(sec,min)"]}</TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 50]}
//             component="div"
//             count={totalRows}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//       )}
//     </Card>
//   );
// };

// export default TableView;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   Typography,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   CircularProgress,
// } from "@mui/material";

// const TableView = () => {
//   const [data, setData] = useState([]);
//   const [regions, setRegions] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [totalRows, setTotalRows] = useState(0);

//   // Fetch data based on the selected region
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:5000/api/metrics", {
//         params: { region: selectedRegion },
//       });
//       setData(response.data);
//       setTotalRows(response.data.length);

//       // Populate regions if not already populated
//       if (!regions.length) {
//         const uniqueRegions = Array.from(
//           new Set(response.data.map((row) => row.region || "Unknown"))
//         );
//         setRegions(["All", ...uniqueRegions]);
//       }
//     } catch (error) {
//       setError("Failed to load data.");
//       console.error("API Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data when the selected region or page changes
//   useEffect(() => {
//     fetchData();
//   }, [selectedRegion]);

//   // Pagination handlers
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Card style={{ backgroundColor: "black", color: "white", padding: "16px", borderRadius: "8px" }}>
//       <Typography
//         variant="h6"
//         style={{ marginBottom: "16px", color: "white", textAlign: "center" }}
//       >
//         Data Table
//       </Typography>
//       <Select
//         value={selectedRegion}
//         onChange={(e) => setSelectedRegion(e.target.value)}
//         style={{
//           marginBottom: "16px",
//           color: "white",
//           backgroundColor: "#333",
//         }}
//       >
//         {regions.map((region, index) => (
//           <MenuItem key={index} value={region}>
//             {region}
//           </MenuItem>
//         ))}
//       </Select>

//       {loading ? (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
//           <CircularProgress />
//           <Typography>Loading data...</Typography>
//         </div>
//       ) : error ? (
//         <Typography color="error">{error}</Typography>
//       ) : (
//         <TableContainer style={{ height: "600px", overflow: "auto" }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ color: "white" }}>Region</TableCell>
//                 <TableCell style={{ color: "white" }}>Ad Name</TableCell>
//                 <TableCell style={{ color: "white" }}>Clicks</TableCell>
//                 <TableCell style={{ color: "white" }}>Impressions</TableCell>
//                 <TableCell style={{ color: "white" }}>Conversions</TableCell>
//                 <TableCell style={{ color: "white" }}>Budget Allocated</TableCell>
//                 <TableCell style={{ color: "white" }}>Engagement</TableCell>
//                 <TableCell style={{ color: "white" }}>Age Group</TableCell>
//                 <TableCell style={{ color: "white" }}>Date</TableCell>
//                 <TableCell style={{ color: "white" }}>Time Spent</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell style={{ color: "white" }}>{row.region}</TableCell>
//                     <TableCell style={{ color: "white" }}>
//                       {row.adNames.join(", ")}
//                     </TableCell>
//                     <TableCell style={{ color: "white" }}>{row.clicks}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.impressions}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.conversions}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.budget}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.engagement}</TableCell>
//                     <TableCell style={{ color: "white" }}>
//                       {row.ageGroups.join(", ")}
//                     </TableCell>
//                     <TableCell style={{ color: "white" }}>{row.dates.join(", ")}</TableCell>
//                     <TableCell style={{ color: "white" }}>{row.timeSpent}</TableCell>
//                   </TableRow>
//                 ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 50]}
//             component="div"
//             count={totalRows}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//       )}
//     </Card>
//   );
// };

// export default TableView;


import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Typography,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  CircularProgress,
} from "@mui/material";

const TableView = () => {
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(""); // Initially empty to show all regions
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25); // Set default rows per page to 25
  const [totalRows, setTotalRows] = useState(0);

  // Fetch data based on the selected region
  const fetchData = async (region) => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/metrics", {
        params: { region },
      });

      // Update the data
      setData(response.data);

      // Update regions list to show all available regions
      const uniqueRegions = Array.from(
        new Set(response.data.map((row) => row.region || "Unknown"))
      );
      setRegions(uniqueRegions);

      // Update total row count
      setTotalRows(response.data.reduce((acc, regionData) => acc + regionData.rows.length, 0));
    } catch (error) {
      setError("Failed to load data.");
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the selected region or page changes
  useEffect(() => {
    fetchData(selectedRegion); // Fetch data based on selected region
  }, [selectedRegion, page]);

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card style={{ backgroundColor: "black", color: "white", padding: "16px", borderRadius: "8px" }}>
      <Typography
        variant="h6"
        style={{ marginBottom: "16px", color: "white", textAlign: "center" }}
      >
        Data Table
      </Typography>

      <Select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        style={{
          marginBottom: "16px",
          color: "white",
          backgroundColor: "#333",
        }}
        displayEmpty
      >
        {/* If no region is selected, show 'Select Region' */}
        <MenuItem value="" disabled>Select Region</MenuItem>

        {/* Show the list of all regions */}
        {regions.length > 0 &&
          regions.map((region, index) => (
            <MenuItem key={index} value={region}>
              {region}
            </MenuItem>
          ))}
      </Select>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
          <CircularProgress />
          <Typography>Loading data...</Typography>
        </div>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TableContainer style={{ height: "600px", width:"1465px" }}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell style={{ color: "white" }}>Region</TableCell> */}
                <TableCell style={{ color: "white" }}>Ad Name</TableCell>
                <TableCell style={{ color: "white" }}>Clicks</TableCell>
                <TableCell style={{ color: "white" }}>Impressions</TableCell>
                <TableCell style={{ color: "white" }}>Conversions</TableCell>
                <TableCell style={{ color: "white" }}>Budget Allocated</TableCell>
                <TableCell style={{ color: "white" }}>Engagement</TableCell>
                <TableCell style={{ color: "white" }}>Age Group</TableCell>
                <TableCell style={{ color: "white" }}>Date</TableCell>
                <TableCell style={{ color: "white" }}>Time Spent</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .flatMap((regionData) => regionData.rows)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    {/* <TableCell style={{ color: "white" }}>{row.region}</TableCell> */}
                    <TableCell style={{ color: "white" }}>
                      {row.adName}
                    </TableCell>
                    <TableCell style={{ color: "white" }}>{row.clicks}</TableCell>
                    <TableCell style={{ color: "white" }}>{row.impressions}</TableCell>
                    <TableCell style={{ color: "white" }}>{row.conversions}</TableCell>
                    <TableCell style={{ color: "white" }}>{row.budget}</TableCell>
                    <TableCell style={{ color: "white" }}>{row.engagement}</TableCell>
                    <TableCell style={{ color: "white" }}>
                      {row.ageGroup}
                    </TableCell>
                    <TableCell style={{ color: "white" }}>{row.date}</TableCell>
                    <TableCell style={{ color: "white" }}>{row.timeSpent}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[25, 50, 100]} // Option for 25 rows per page
            component="div"
            count={totalRows}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{ color: "white" }} // White color for pagination text
          />
        </TableContainer>
      )}
    </Card>
  );
};

export default TableView;
