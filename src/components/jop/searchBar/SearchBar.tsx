import React, { useContext } from "react";
import InputSearch from "./inputSearch";
import InputFilter from "./inputFilter";
import Checked from "../../ui/Checked";
 import { ThemeContext } from "../../theme/themeContext";
import ButtonSearch from "./ButtonSearch";
import ButtonFilter from "./ButtonFilter";

const SearchBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-24 ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      } rounded-md m-auto px-2 w-[70%] mt-[-55px]  flex justify-cnter`}
    >
      <div className="h-full sm:w-[48%] md:w-[32%]">
        <InputSearch />
      </div>
      <div className="h-full w-[22%] sm:ml-6 sm:block md:hidden">
        <ButtonFilter />
      </div>
      <div className="h-full w-[32%] sm:ml-6 sm:hidden md:block">
        <InputFilter />
      </div>
      <div className="h-full w-[22%] sm:hidden md:block">
        <Checked />
      </div>
      <div className="h-full w-[14%] md:block sm:hidden">
        <ButtonSearch  />
      </div>
      <div className="h-full w-[14%] md:hidden sm:block">
        <ButtonSearch T />
      </div>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
