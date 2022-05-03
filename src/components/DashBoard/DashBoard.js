import React from "react";
import DashBoardLeft from "../DashboardLeft/DashBoardLeft";
import DashBoardNavigation from "../DashBoardNavigation/DashBoardNavigation";
import DashBoardRight from "../DashBoardRight/DashBoardRight";

function DashBoard() {
  return (
    <div className="dashboard-container relative flex flex-col h-screen">
      <DashBoardNavigation />
      <div className="dashboardcontent relative flex flex-1 w-full h-full">
        <DashBoardLeft />
        <DashBoardRight />
      </div>
    </div>
  );
}

export default DashBoard;
