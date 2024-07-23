import React, { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";
import useTheme from "../Hook/useTheme";
type props = {
  onChange?: any;
  ref?: any;
  checked?: any;
};
const Checked = ({ checked, onChange, ref }: props) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center mt-8 ml-4">
      <input
        type="checkbox"
        value=""
        className=" h-5 w-5  border-blue rounded-md  accent-blue  focus:ring-blue focus:ring-2  dark:bg-gray-700 "
        checked={checked}
        ref={ref}
        onChange={onChange}
      />
      <label
        className={`ms-2 text-xl font-bold ${
          theme === "dark" ? "text-cardL" : "text-cardD"
        }  dark:text-gray-300`}
      >
        Full Time
      </label>
    </div>
  );
};

export default Checked;
