import React, { createContext, useState } from "react";
export const TableDataContext = createContext();
function StateProvider({ children }) {
  const [tabledata, settabledata] = useState([]);
  const [sessionAddCount, setsessionAddCount] = useState(0);
  const [editData, seteditData] = useState([]);
  const [newEntry, setnewEntry] = useState({
    item_name: "",
    item_code: "",
    selling_price: "",
    purchase_price: "",
    unit: "",
    date: "",
  });

  const setEditData = (editData) => {
    seteditData(editData);
  };
  const setTableData = (data) => {
    settabledata(data);
  };
  const setNewEntry = (newEntry) => {
    setnewEntry(newEntry);
  };

  const setSessionAddCount = (newValue) => {
    setsessionAddCount(newValue);
  };
  return (
    <TableDataContext.Provider
      value={{
        tabledata,
        setTableData,
        newEntry,
        setNewEntry,
        sessionAddCount,
        setSessionAddCount,
        editData,
        setEditData,
      }}
    >
      {children}
    </TableDataContext.Provider>
  );
}

export default React.memo(StateProvider);
