import React from "react";
import moneyBack from "./assets/moneyBack.png";
import "./moneyback.css";
function MoneyBack() {
  return (
    <div className="moneyback relative flex p-4">
      <div className="leftContainer relative flex flex-col flex-1 pl-40 items-start justify-center">
        <span className="upperhead relative text-5xl font-normal mt-4">
          Now try all benefits of my BillBook app
        </span>
        <span className="lowerhead relative text-4xl font-bold mt-10 text-orange-600">
          Free for 14 days
        </span>
      </div>
      <span className="rightcontainer pr-40">
        <img src={moneyBack} alt="moneyback" className="relative h-40 w-40" />
      </span>
    </div>
  );
}

export default React.memo(MoneyBack);
