<<<<<<< Updated upstream
import React from "react";
type p ={
    text:any
=======
 type p ={
    text:string
>>>>>>> Stashed changes
}
const Li = ({text}:p) => {
  return (
    <li className="text-lg text-blue p">
      {" "}
       <span className="text-[#6e8098] indent-63 pl-2">
       {text}
      </span>{" "}
    </li>
  );
};

export default Li;
