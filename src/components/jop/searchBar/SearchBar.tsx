import React from "react";
import useFilterJobs from "../../../hooks/useFilterJobs";
import useTheme from "../../../hooks/useTheme";
import SearchIcon from "../../icons/SearchIcon";
import Checked from "../../ui/Checked";
import ButtonFilter from "./ButtonFilter";
import ButtonSearch from "./ButtonSearch";
import InputFilter from "./inputFilter";
import InputSearch from "./inputSearch";

const SearchBar: React.FC = () => {
  const {
    filterByInfosValue,
    filterByLocationValue,
    fullTimeOnlyChecked,
    filterByInfosInput,
    filterByLocationInput,
    fullTimeOnlyInput,
    submitSearchHandler,
    changeInputInfosHandler,
    changeInputLocationHandler,
    changeCheckboxValueHandler,
  } = useFilterJobs();
  const { theme } = useTheme();

  return (
    <div
      className={`h-24 ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      } rounded-md m-auto px-2 w-[70%] mt-[-55px]  flex justify-cnter`}
    >
      <div className="h-full sm:w-[48%] md:w-[32%]">
        <InputSearch
          ref={filterByInfosInput}
          onChange={changeInputInfosHandler}
          value={filterByInfosValue}
        />
      </div>
      <div className="h-full w-[22%] sm:ml-6 sm:block md:hidden">
        <ButtonFilter />
      </div>
      <div className="h-full w-[32%] sm:ml-6 sm:hidden md:block">
        <InputFilter
          ref={filterByLocationInput}
          onChange={changeInputLocationHandler}
          value={filterByLocationValue}
        />
      </div>
      <div className="h-full w-[22%] sm:hidden md:block">
        <Checked
          checked={fullTimeOnlyChecked}
          ref={fullTimeOnlyInput}
          onChange={changeCheckboxValueHandler}
        />
      </div>
      <div className="h-full w-[14%] md:block sm:hidden">
        <ButtonSearch onClick={submitSearchHandler}>Search</ButtonSearch>
      </div>
      <div className="h-full w-[14%] md:hidden sm:block">
        <ButtonSearch>
          {" "}
          <SearchIcon color="cardL" />{" "}
        </ButtonSearch>
      </div>
    </div>
  );
};

export default SearchBar;
