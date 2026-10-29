

import React from "react";
import BarChart from "./Charts/BarChart";
import AgeGroupPieChart from "./Charts/AgeGroupPieChart";
import ABTesting from "./Charts/ABTesting";
import AdTimePerformance from "./Charts/AdTimePerformance";
import OverviewCards from "./Charts/OverviewCards";
import Sidebar from "./Pages/SideBar";
import Navbar from "./Pages/Navbar";
import "../css/style.css";
import ConversionChart from "./Charts/ConversionChart";
import ImpressionChart from "./Charts/ImpressionChart";
import BudgetForRegion from "./Charts/BudgetForRegion"
import AdsTable from "./Charts/AdsTable";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="dashboard-content">
        <Sidebar />

        <div className="content-container">
          {/* Overview and Ad Time Performance in one row */}
          <div className="overview-and-ad-time-row" style={{ height:400 }}>
            <div className="overview-section">
              <OverviewCards />
            </div>
            <div className="ad-time-performance-section" style={{ height: 500 }}>
              <AdTimePerformance />
            </div>
          </div>

          {/* Ad Performance & Age Group Pie Chart */}
          <div className="charts-row">
            <div className="bar-chart">
              <BarChart />
            </div>
            <div className="age-group-pie-chart">
              <AgeGroupPieChart />
            </div>
            {/* <div className="region-performance">
              <RegionPerformance />
            </div> */}
            <div className="ab-testing" style={{ flex: 1 }}>
              <ABTesting />
            </div>
          </div>

          

          {/* Region Performance & AB Testing */}
          <div
            className="performance-row"
            style={{ display: "flex", alignItems: "center" }}
          >

            <div>
              <BudgetForRegion />
            </div>

            <div>
              <ConversionChart />
            </div>
            <div>
              <ImpressionChart />
            </div>
          </div>
         
          <div>
           <div>
          <AdsTable/>
       </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
