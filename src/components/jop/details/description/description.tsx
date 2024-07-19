import React from "react";
import Bar from "./Bar";
import InfoJop from "./InfoJop";
import Desc from "../../../ui/Desc";
  import Requirements from "./Requirements";
import ToDo from "./ToDo";

const Description = () => {
 
  return (
    <Bar>
   <InfoJop/>
   <Desc text={"cx"}/>
 
   <Requirements/>
   <ToDo/>
    </Bar>
  );
};

export default Description;
