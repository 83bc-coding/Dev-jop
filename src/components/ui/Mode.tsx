import React from "react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
type props = {
  onChange: () => void;
};
const Mode = ({ onChange }: props) => {
  return (
    <div className="mx-5 mt-12">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChange}
        />
        <SunIcon />

        <div className="relative w-9 h-5 bg-cardL peer-focus:outline-none peer-focus:ring-0     rounded-full peer dark:bg-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-blue after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-blue after:border-blue after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <MoonIcon />
      </label>
    </div>
  );
};

export default Mode;
