import React from "react";
import "../NavOptions/navoptions.css";
function NavOptions({ option }) {
  return (
    <div
      className=" navOptions relative block px-4 font-bold text-gray-500"
      style={{
        fontFamily: "sans-serif",
      }}
    >
      {option}
    </div>
  );
}

export default React.memo(NavOptions);
