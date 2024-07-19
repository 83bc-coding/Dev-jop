import React from "react";
type props ={
    text:string
}
const Desc = ({text}:props) => {
  return (
    <div className=" w-[95%] text-[#6e8098]   h-auto mb-10 mt-10    ">
{text}
    </div>
  );
};

export default Desc;
