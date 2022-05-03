import React from "react";
import "./dashboardleft.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
function DashBoardLeft() {
  const columns = [
    { field: "item_name", headerName: "ITEM NAME", width: 150 },
    { field: "item_code", headerName: "ITEM CODE", width: 150 },
    { field: "selling_price", headerName: "SELLLING PRICE", width: 150 },
    { field: "purchase_price", headerName: "PURCHASE PRICE", width: 150 },
    { field: "unit", headerName: "UNIT", width: 150 },
    { field: "date", headerName: "DATE", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      item_name: "XYZ",
      item_code: "DK1235",
      selling_price: "500",
      purchase_price: "500",
      unit: "PCS",
      date: "23/01/2001",
    },
    {
      id: 2,
      item_name: "XYZ",
      item_code: "DK1235",
      selling_price: "500",
      purchase_price: "500",
      unit: "PCS",
      date: "23/01/2001",
    },
  ];
  return (
    <div
      className="dashboardLeft relative flex flex-col h-full border-r-2"
      style={{ flexBasis: "50%"}}
    >
      <div
        className="heading relative flex justify-start items-center font-bold border-b-2 h-14 pl-4"
      >
        Items
      </div>
      <div
        className="searchcontainer relative flex pl-4 mt-2 items-center justify-start"
      >
        <div
          className="searchelement relative flex items-center "
        >
          <span>
            <TextField
              variant="outlined"
              placeholder="Search Items"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "30rem",
              }}
            />
          </span>
        </div>
      </div>
      <div
        className="tablecontainer relative flex flex-1 w-full h-full p-4"
      >
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
export default DashBoardLeft;
