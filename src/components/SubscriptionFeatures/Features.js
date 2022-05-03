import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
function Features({ tickType, title }) {
  return (
    <div className="features relative flex items-center justify-center">
      <span className="tickicon relative block">
        {tickType === "single" ? (
          <DoneIcon style={{ color: "green" }} />
        ) : (
          <DoneAllIcon style={{ color: "green" }} />
        )}
      </span>
      <span className="feature-title relative block ml-2 mt-2 text-gray-600 font-semibold">
        {" "}
        {title}
      </span>
    </div>
  );
}

export default Features;
