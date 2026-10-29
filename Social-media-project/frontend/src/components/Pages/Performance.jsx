import React from "react";
import LowerPerformanceAds from "../Charts/LowerPerfomingAds";
import TopPerformanceAds from "../Charts/TopPerformingAds";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

const Performance = () => {
  return (
    <div
      className="performance-container"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px", 
          zIndex: 1000, 
        }}
      >
        <Navbar />
      </div>

      
      <div
        style={{
          position: "fixed",
          top: "60px",
          left: 0,
          width: "250px", 
          height: "calc(100vh - 60px)",
          marginTop: "20px", 
        }}
      >
        <Sidebar />
      </div>

     
      <div
        style={{
          
          paddingTop: "150px", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center", 
          width: "100%", 
        }}
      >
        <div className="top-performance-ads" style={{ marginBottom: "60px" }}>
          <TopPerformanceAds />
        </div>
        <div className="lower-performance-ads">
          <LowerPerformanceAds />
        </div>
      </div>
    </div>
  );
};

export default Performance;
