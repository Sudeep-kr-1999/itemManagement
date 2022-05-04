import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "../DataElement/dataelement.css";
function DataElement({ data, label, id }) {
  return (
    <div className="datacontainer relative flex flex-col justify-center items-center ">
      <div className="data text-6xl flex items-center justify-center font-bold text-orange-600 ">
        {data}
        {id === 4 && (
          <span>
            <StarIcon style={{ height: "60px", width: "60px",marginLeft:"5px" }} />
          </span>
        )}
      </div>
      <div className="data text-xl font-semibold text-gray-500 mt-6">
        {label}
      </div>
    </div>
  );
}

export default React.memo(DataElement);
