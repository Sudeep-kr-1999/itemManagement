import React from "react";
import "./dashboardnav.css";
function DashBoardNavigation() {
  return (
    <div className="dashboardnav relative flex border-2 p-4 justify-between">
      <span className="usernumber relative block font-bold">7488368218</span>
      <span className="logout relative block font-bold">Logout</span>
    </div>
  );
}

export default DashBoardNavigation;
