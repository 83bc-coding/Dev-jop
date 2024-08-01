import React from "react";
import Bar from "./Bar";
import JopInfo from "./infoJob";
import CompanySite from "../BarInfo/CompanySite";
type Props = {
  state: string;
  name: string;
};
const BarDown = ({state,name}:Props) => {
  return (
    <Bar>
      <div className=" w-[100%]  ml-8 flex flex-col justify-center items-center md:block sm:hidden ">
        <JopInfo country={state} time="" ago=""   name={name} />
      </div>
    </Bar>
  );
};

export default BarDown;
