import { TextField } from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import "./itemdetailsinput.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TableDataContext } from "../StateProvider/StateProvider";
function ItemDetailsInput({ name, label, placeholder }) {
  const { setNewEntry, newEntry, editData } = useContext(TableDataContext);
  const formatDate = useCallback((date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("/");
  }, []);

  useEffect(() => {
    if (editData?.length !== 0) {
      console.log(editData);
      setNewEntry(editData[0]);
    } else {
      setNewEntry({
        item_name: "",
        item_code: "",
        selling_price: "",
        purchase_price: "",
        unit: "",
        date: "",
      });
    }
  }, [editData]);

  return (
    <div className="itemInput relative flex flex-col items-start p-2">
      <span className="label relative block text-lg text-gray-600 p-2">
        {label}
      </span>
      {name === "date" ? (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            placeholder={placeholder}
            name={name}
            value={newEntry[name]}
            onChange={(newValue) =>
              setNewEntry((previousState) => {
                return {
                  ...previousState,
                  [name]: formatDate(newValue),
                };
              })
            }
            renderInput={(params) => (
              <TextField {...params} sx={{ width: "100%" }} />
            )}
          />
        </LocalizationProvider>
      ) : name === "unit" ? (
        <>
          <select
            name={name}
            style={{ width: "100%", height: "100%" }}
            value={newEntry[name]}
            onChange={(event) =>
              setNewEntry((previousState) => {
                return {
                  ...previousState,
                  [name]: event.target.value,
                };
              })
            }
          >
            <option value={placeholder}>{placeholder}</option>
            <option value="PCS">PCS</option>
            <option value="BOXES">BOXES</option>
            <option value="GMS">GMS</option>
            <option value="KGS">KGS</option>
            <option value="LTR">LTR</option>
          </select>
        </>
      ) : (
        <TextField
          name={name}
          placeholder={placeholder}
          value={newEntry[name]}
          onChange={(event) =>
            setNewEntry((previousState) => {
              return {
                ...previousState,
                [name]: event.target.value,
              };
            })
          }
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
}

export default React.memo(ItemDetailsInput);
