import React, { ReactNode } from "react";
import Li from "./Li";
type props = {
  children?: ReactNode;
 type:string
};
const Lists = ({children,type}:props) => {
  return (
<ol className={`space-y-6   text-gray-500 list-${type} list-inside dark:text-gray-400 mb-14`}>
 
        
 {children}
   <Li text={"oijuhghfc"}/>
  
    </ol>
  );
};

export default Lists;
