import { Button } from "@mui/material";
import React from "react";
import ItemDetailsInput from "../ItemDetailsInput/ItemDetailsInput";
import "./dashboardright.css";
function DashBoardRight() {
  const inputItem = [
    {
      id: 1,
      name: "item_name",
      label: "Item Name",
      placeholder: "Enter Item name",
    },
    {
      id: 2,
      name: "item_code",
      label: "Item Code",
      placeholder: "Enter Item Code",
    },
  ];
  const optionalInputDetails = [
    {
      id: 1,
      name: "selling_price",
      label: "Sales Price",
      placeholder: "0",
    },
    {
      id: 2,
      name: "purchase_price",
      label: "Purchase Price",
      placeholder: "0",
    },
    {
      id: 3,
      name: "unit",
      label: "Measuring UNIT",
      placeholder: "Select Unit",
    },
    {
      id: 4,
      name: "date",
      label: "Opening Stock Date",
      placeholder: "Select Date",
    },
  ];
  return (
    <div
      className="dashboardright relative flex flex-col h-full border-l-2"
      style={{ flexBasis: "50%" }}
    >
      <div className="heading relative flex justify-start items-center font-bold border-b-2 h-14 pl-4">
        Create/Edit Items
      </div>
      <div className="itemDetails relative grid grid-cols-2">
        {inputItem.map(({ id, name, label, placeholder }) => (
          <ItemDetailsInput
            key={id}
            name={name}
            label={label}
            placeholder={placeholder}
          />
        ))}
      </div>
      <div className="stock-pricing-label relative flex justify-start items-center font-bold bg-gray-200 h-14 pl-4 ">
        Stock & Pricing Details(Optional)
      </div>
      <div className="itemDetailsoptional relative grid grid-cols-2">
        {optionalInputDetails.map(({ id, name, label, placeholder }) => (
          <ItemDetailsInput
            key={id}
            name={name}
            label={label}
            placeholder={placeholder}
          />
        ))}
      </div>
      <div className="submitBtn relative w-full px-4 mt-6">
        <Button
          variant="contained"
          disableElevation
          fullWidth
          sx={{
            backgroundColor: "purple",
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default DashBoardRight;
