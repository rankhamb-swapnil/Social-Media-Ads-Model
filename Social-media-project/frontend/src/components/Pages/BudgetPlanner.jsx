import React from "react";
import BudgetOptimization from "../Charts/BudgetOptimization";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";

const BudgetPlanner = () => {
  return (
    <div
      className="budget-optimization-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
 
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "50px", 
          zIndex: 1000, 
        }}
      >
        <Navbar />
      </div>

   
      <div
        style={{
          display: "flex",
          marginTop: "50px", 
          flexDirection: "row",
          width: "100%",
        }}
      >
      
        <div
          style={{
            position: "fixed",
            left: 0,
            top: "60px", 
            width: "250px",
            height: "calc(100vh - 60px)", 
            marginTop: "20px",
          }}
        >
          <Sidebar />
        </div>

      
        <div
          className="budget-optimization-content"
          style={{
            marginLeft: "260px", 
            marginRight: "260px",
            paddingTop: "80px",
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 
            width: "100%", 
          }}
        >
          <BudgetOptimization />
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
