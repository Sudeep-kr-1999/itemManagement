import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboardnav.css";
import { TableDataContext } from "../StateProvider/StateProvider";
function DashBoardNavigation() {
  const [userPhoneNumber, setuserPhoneNumber] = useState("");
  const { setSessionAddCount } = useContext(TableDataContext);
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
    setSessionAddCount(0);
  }, [navigate, setSessionAddCount]);

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

export default React.memo(DashBoardNavigation);
