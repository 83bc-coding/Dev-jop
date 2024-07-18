import React, { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";

const Checked = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center mt-8 ml-4">
      <input
        type="checkbox"
        value=""
        className=" h-5 w-5  border-blue rounded-md  accent-blue  focus:ring-blue focus:ring-2  dark:bg-gray-700 "
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
