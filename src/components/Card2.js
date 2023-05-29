import React from "react";
import m3m from "../m3m-logo.png";
const Card2 = () => {
  return (
    <>
      <div className="card bg-white w-[200px] h-[250px] m-2 rounded-lg shadow-lg">
        <div className="top">
          <img
            className="w-[200px] h-[200px] object-cover  p-2"
            src={m3m}
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default Card2;
