import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../../../theme/themeContext";
type props = {
  children?: ReactNode;
};
const Bar = ({ children }: props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`md:h-24 sm:h-64 ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      } rounded-md  bg-blue m-auto mb-[0px] w-[70%] mt-[35px] flex md:flex-row  justify-between items-center pr-5 sm:flex-col`}
    >
      {children}
    </div>
  );
};

export default Bar;
