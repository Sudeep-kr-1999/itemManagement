import React from "react";
import DataElement from "../DataElement/DataElement";

function Statistics() {
  const statisticsData = [
    {
      id: 1,
      data: "1,00,000+",
      label: "Business Trust us",
    },
    {
      id: 2,
      data: "30,00,000+",
      label: "Invoices Created",
    },
    {
      id: 3,
      data: "5,000+",
      label: "Cities & Towns in India",
    },
    {
      id: 4,
      data: "4.5",
      label: "Rating on Google Play",
    },
  ];
  return (
    <div className="statcontainer relative flex items-center justify-around p-20">
      {statisticsData.map((element) => (
        <DataElement
          key={element.id}
          data={element.data}
          label={element.label}
          id={element.id}
        />
      ))}
    </div>
  );
}

export default Statistics;
