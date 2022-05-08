import React, { useEffect } from "react";
import DashBoardLeft from "../DashboardLeft/DashBoardLeft";
import DashBoardNavigation from "../DashBoardNavigation/DashBoardNavigation";
import DashBoardRight from "../DashBoardRight/DashBoardRight";
import { useNavigate } from "react-router-dom";
function DashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("currentUserPhoneNumber") === null) {
      navigate("/");
    }
  }, []);

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

export default React.memo(DashBoard);
