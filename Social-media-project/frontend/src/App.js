// frontend/src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UploadCSV from "./components/UploadCSV";
import Dashboard from "./components/Dashboard";
import Performance from "./components/Pages/Performance";
import BudgetPlanner from "./components/Pages/BudgetPlanner";
import Profile from "./components/Pages/Profile";
import Prediction from "./components/Pages/Prediction";
import Logout from "./components/Pages/Logout";
import Report from "./components/Pages/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/upload" />} />
        <Route path="/upload" element={<UploadCSV />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/budgetPlanner" element={<BudgetPlanner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
