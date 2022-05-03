import { TextField } from "@mui/material";
import React, { useCallback } from "react";
import "./itemdetailsinput.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function ItemDetailsInput({ name, label, placeholder }) {
  const formatDate = useCallback((date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }, []);

  return (
    <div className="itemInput relative flex flex-col items-start p-2">
      <span className="label relative block text-lg text-gray-600 p-2">
        {label}
      </span>
      {name === "date" ? (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            placeholder={placeholder}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: "100%" }} />
            )}
          />
        </LocalizationProvider>
      ) : name !== "unit" ? (
        <TextField
          name={name}
          placeholder={placeholder}
          style={{ width: "100%" }}
        />
      ) : (
        <>
          <select name={name} style={{ width: "100%", height: "100%" }}>
            <option value={placeholder} selected>
              {placeholder}
            </option>
            <option value="PCS">PCS</option>
            <option value="BOXES">BOXES</option>
            <option value="GMS">GMS</option>
            <option value="KGS">KGS</option>
            <option value="LTR">LTR</option>
          </select>
        </>
      )}
    </div>
  );
}

export default ItemDetailsInput;
