import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../../../theme/themeContext";
type props = {
  children?: ReactNode;
};
const Bar = ({ children }: props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-auto min-h-96 p-8 ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      } rounded-md m-auto mt-24  w-[57%] mt-[-35px] flex md:flex-col  justify-between items-start p-5 sm:flex-col`}
    >
      {children}
    </div>
  );
};

export default Bar;
