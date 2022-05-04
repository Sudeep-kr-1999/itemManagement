import { Button } from "@mui/material";
import React, { useCallback, useContext } from "react";
import ItemDetailsInput from "../ItemDetailsInput/ItemDetailsInput";
import { TableDataContext } from "../StateProvider/StateProvider";

import "./dashboardright.css";
function DashBoardRight() {
  const {
    newEntry,
    setSessionAddCount,
    sessionAddCount,
    setNewEntry,
    editData,
  } = useContext(TableDataContext);
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

  const addData = useCallback(() => {
    if (newEntry.item_name !== "" && newEntry.item_code !== "") {
      const currentUser = localStorage.getItem("currentUserPhoneNumber");
      if (localStorage.getItem(currentUser + "data") != null) {
        const data = JSON.parse(localStorage.getItem(currentUser + "data"));
        if (editData?.length !== 0) {
          const selectedData = data.filter(
            ({ item_code }) => editData[0].item_code !== item_code
          );
          selectedData.push(newEntry);
          localStorage.setItem(
            currentUser + "data",
            JSON.stringify(selectedData)
          );
          setSessionAddCount(sessionAddCount + 1);
        } else {
          data.push(newEntry);
          localStorage.setItem(currentUser + "data", JSON.stringify(data));
          setSessionAddCount(sessionAddCount + 1);
        }
      } else {
        const data = [];
        data.push(newEntry);
        setSessionAddCount(sessionAddCount + 1);
        localStorage.setItem(currentUser + "data", JSON.stringify(data));
      }
      setNewEntry({
        item_name: "",
        item_code: "",
        selling_price: "",
        purchase_price: "",
        unit: "",
        date: "",
      });
    } else {
      alert(
        "Either Of Item Name or Item Code is Missing Please provide required information"
      );
    }
  }, [newEntry, sessionAddCount, setSessionAddCount, setNewEntry, editData]);

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
          onClick={addData}
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

export default React.memo(DashBoardRight);
