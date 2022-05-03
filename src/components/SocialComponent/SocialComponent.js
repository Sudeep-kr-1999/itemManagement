import React from "react";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import "./socialcomponent.css";
function SocialComponent({ name, type }) {
  return (
    <div
      className="social relative flex p-2 mr-2 w-40 rounded-sm items-center justify-center"
      style={
        type === "WhatsApp"
          ? { background: "lightgreen" }
          : { background: "lightblue" }
      }
    >
      {type === "WhatsApp" ? (
        <span className="logo">
          <WhatsappOutlinedIcon />
        </span>
      ) : (
        <span className="logo">
          <ChatBubbleOutlineRoundedIcon />
        </span>
      )}

      <span className="description">{name}</span>
    </div>
  );
}

export default SocialComponent;
