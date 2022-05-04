import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboardnav.css";
function DashBoardNavigation() {
  const [userPhoneNumber, setuserPhoneNumber] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("currentUserPhoneNumber") != null) {
      setuserPhoneNumber(localStorage.getItem("currentUserPhoneNumber"));
    } else {
      setuserPhoneNumber("");
    }
  }, [userPhoneNumber]);

  const logout = useCallback(() => {
    navigate("/");
    localStorage.removeItem("currentUserPhoneNumber");
  }, [navigate]);

  return (
    <div className="dashboardnav relative flex border-2 p-4 justify-between">
      <span className="usernumber relative block font-bold">
        {userPhoneNumber}
      </span>
      <span className="logout relative block font-bold" onClick={logout}>
        Logout
      </span>
    </div>
  );
}

export default DashBoardNavigation;
