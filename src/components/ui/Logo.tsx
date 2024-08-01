 import { ReactNode } from "react";
 type props = {
    children?: ReactNode;
  };
const Logo = ({children}:props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" className="mx-auto ">

      {children}
    </svg>
    //     <img
    //     className="w-10 h-8     m-auto"
    //     src={x}
    //     alt="Rounded avatar"
    //   />
  );
};

export default Logo;
