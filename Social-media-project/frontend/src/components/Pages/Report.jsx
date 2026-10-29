import React from "react";
import Sidebar from "./SideBar";
import Navbar from "./Navbar";
import GenrateReport from "../Charts/GenrateReport";


const Report = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Sidebar />
        </div>

        <div>
         <GenrateReport></GenrateReport>
        </div>
      </div>
    </div>
  );
};

export default Report;
