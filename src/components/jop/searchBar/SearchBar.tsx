import React, { useContext, useRef, useState } from "react";
import InputSearch from "./inputSearch";
import InputFilter from "./inputFilter";
import Checked from "../../ui/Checked";
import { ThemeContext } from "../../theme/themeContext";
import ButtonSearch from "./ButtonSearch";
import ButtonFilter from "./ButtonFilter";
import SearchIcon from "../../icons/SearchIcon";
import { JobsContext } from "../../../store/JobDetalis/JobsContextProvider";
import useTheme from "../../Hook/useTheme";

const SearchBar: React.FC = () => {
  const { filterByInfos, filterByLocation, fullTimeOnly, updateFilterParams } =
    useContext(JobsContext);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [filterByInfosValue, setFilterByInfosValue] = useState(filterByInfos);
  const [filterByLocationValue, setFilterByLocationValue] =
    useState(filterByLocation);
  const [fullTimeOnlyChecked, setFullTimeOnlyChecked] = useState(fullTimeOnly);

  const filterByInfosInput = useRef<HTMLInputElement>(null);
  const filterByLocationInput = useRef<HTMLInputElement>(null);
  const fullTimeOnlyInput = useRef<HTMLInputElement>(null);

  const submitSearchHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSettingsModalOpen) setIsSettingsModalOpen(false);

    updateFilterParams(
      filterByInfosValue,
      filterByLocationValue,
      fullTimeOnlyChecked
    );
  };

  const changeInputInfosHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByInfosValue(e.target.value);
  };

  const changeInputLocationHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterByLocationValue(e.target.value);
  };

  const changeCheckboxValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullTimeOnlyChecked(e.target.checked);
  };
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
