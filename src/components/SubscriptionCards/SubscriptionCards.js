import React from "react";
import silver from "./assets/silver.png";
import golden from "./assets/golden.png";
import diamond from "./assets/diamond.png";
import DevicesIcon from "@mui/icons-material/Devices";
import "./subscriptioncards.css";
import Features from "../SubscriptionFeatures/Features";
function SubscriptionCards({
  planName,
  previousRate,
  currentRate,
  devices,
  isMostPopular,
  customcolor,
  backgroundcustomcolor,
  features,
}) {
  let img = "";
  if (planName === "Silver Plan") {
    img = <img src={silver} alt="silver plan" />;
  } else if (planName === "Golden Plan") {
    img = <img src={golden} alt="silver plan" />;
  } else if (planName === "Diamond Plan") {
    img = <img src={diamond} alt="silver plan" />;
  }
  return (
    <div
      className="subs-cards relative flex flex-col items-start rounded-md pb-4 pt-4"
      style={
        isMostPopular
          ? {
              height: "30rem",
              width: "30rem",
              backgroundColor: "#fbf6ed",
              border: "1px solid #e4bb7a",
            }
          : { height: "30rem", width: "30rem", border: "1px solid lightgray" }
      }
    >
      <span className="logo relative block h-20 w-20">{img}</span>
      <span className="planname relative block text-black font-bold text-lg ml-4">
        {planName}
      </span>
      <div className="price relative flex items-center ml-4 mt-2">
        <span className="previous-price relative block text-gray-500 font-semibold text-lg">
          <strike>&#8377;{previousRate}</strike>
        </span>
        <span
          className="current-price relative block text-3xl font-bold ml-2"
          style={{ color: `${customcolor}` }}
        >
          &#8377;{currentRate}
        </span>
      </div>
      <div
        className="devices relative flex w-full items-center justify-center mt-4 text-2xl p-2"
        style={{
          backgroundColor: `${backgroundcustomcolor}`,
          color: `${customcolor}`,
        }}
      >
        <span>
          <DevicesIcon
            style={{
              position: "relative",
              height: "30px",
              width: "30px",
              marginRight: "8px",
            }}
          />
        </span>
        {devices}
      </div>

      <div className="feature relative flex flex-col items-start ml-4 mt-2">
        {features.map(({ fid, tickType, title }) => (
          <Features key={fid} tickType={tickType} title={title} />
        ))}
      </div>
      {isMostPopular && (
        <div className="popular absolute top-[-18px] right-4 bg-red-700 text-white font-bold rounded-full px-10 py-1">
          Most Popular
        </div>
      )}
    </div>
  );
}

export default React.memo(SubscriptionCards);
// #db631a--- diamond
// #dba249 --- golden
// #485eb0 -- silver

// silver background #7f8ec8
// golden background #e4bb7a
// diamonnd background #e6925f
