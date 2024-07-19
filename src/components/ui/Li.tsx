import React from "react";
type p ={
    text:string
}
const Li = ({text}:p) => {
  return (
    <li className="text-lg text-blue">
      {" "}
      <span className="bg-blue w-4 h-4 invisible">cxc</span>{" "}
      <span className="text-[#6e8098]">
       {text}
      </span>{" "}
    </li>
  );
};

export default Li;
