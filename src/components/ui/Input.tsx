import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../theme/themeContext";
import useTheme from "../Hook/useTheme";
type props = {
  title: string;
  children: ReactNode;
  onChange?: any;
  ref?: any;
  value: string;
};
const Input = ({ children, title, onChange, value, ref }: props) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center w-[100%] mx-auto h-full  border-r-[1px] border-borderR">
      <div className="relative w-full">
        {children}
        <input
          type="text"
          id="simple-search"
          className={`${
            theme === "dark" ? "bg-cardD" : "bg-cardL"
          }   text-gray-900 text-sm      focus:outline-none block w-full ps-14 p-2.5  dark:bg-gray-700 dark:border-blue dark:placeholder-gray-400 dark:text-white dark:focus:bg-blue dark:focus:border-blue `}
          placeholder={title}
          required
          onChange={onChange}
          ref={ref}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
