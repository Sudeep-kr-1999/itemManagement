import React, { useContext, useEffect, useState } from "react";
import "./dashboardleft.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { TableDataContext } from "../StateProvider/StateProvider";
function DashBoardLeft() {
  const [currentUser, setcurrentUser] = useState("");
  const [searchValue, setsearchValue] = useState("");
  const { tabledata, setTableData, sessionAddCount,setEditData } =
    useContext(TableDataContext);
  const columns = [
    { field: "item_name", headerName: "ITEM NAME", width: 150 },
    { field: "item_code", headerName: "ITEM CODE", width: 150 },
    { field: "selling_price", headerName: "SELLLING PRICE", width: 150 },
    { field: "purchase_price", headerName: "PURCHASE PRICE", width: 150 },
    { field: "unit", headerName: "UNIT", width: 150 },
    { field: "date", headerName: "DATE", width: 150 },
  ];

  useEffect(() => {
    if (searchValue === "") {
      if (localStorage.getItem("currentUserPhoneNumber") != null) {
        setcurrentUser(localStorage.getItem("currentUserPhoneNumber"));
        if (localStorage.getItem(currentUser + "data") != null) {
          const data = JSON.parse(localStorage.getItem(currentUser + "data"));
          setTableData(data);
        }
      } else {
        setcurrentUser("");
      }
    } else {
      if (localStorage.getItem("currentUserPhoneNumber") != null) {
        setcurrentUser(localStorage.getItem("currentUserPhoneNumber"));
        if (localStorage.getItem(currentUser + "data") != null) {
          const data = JSON.parse(localStorage.getItem(currentUser + "data"));
          console.log(data);
          const showdata = data.filter(
            ({ item_code, item_name }) =>
              searchValue === item_code || searchValue === item_name
          );
          setTableData(showdata);
        }
      } else {
        setcurrentUser("");
      }
    }
  }, [currentUser, sessionAddCount, searchValue]);

  return (
    <div
      className="dashboardLeft relative flex flex-col h-full border-r-2"
      style={{ flexBasis: "50%" }}
    >
      <div className="heading relative flex justify-start items-center font-bold border-b-2 h-14 pl-4">
        Items
      </div>
      <div className="searchcontainer relative flex pl-4 mt-2 items-center justify-start">
        <div className="searchelement relative flex items-center ">
          <span>
            <TextField
              variant="outlined"
              placeholder="Search Items"
              value={searchValue}
              onChange={(e) => setsearchValue(e.target.value)}
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
      <div className="tablecontainer relative flex flex-1 w-full h-full p-4">
        <DataGrid
          rows={tabledata}
          columns={columns}
          getRowId={(row) => row.item_code}
          checkboxSelection
          onSelectionModelChange={(item) => {
            const data = JSON.parse(localStorage.getItem(currentUser + "data"));
            const selectedData = data.filter(
              ({ item_code }) => item[0] === item_code
            );
            console.log(selectedData);
            setEditData(selectedData);
          }}
        />
      </div>
    </div>
  );
}
export default React.memo(DashBoardLeft);
