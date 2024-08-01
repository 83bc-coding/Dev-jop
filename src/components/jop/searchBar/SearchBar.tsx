<<<<<<< Updated upstream
import React from "react";
import useFilterJobs from "../../../hooks/useFilterJobs";
import useTheme from "../../../hooks/useTheme";
import FilterIcon from "../../icons/LocationIcon";
import SearchIcon from "../../icons/SearchIcon";
import Checkbox from "../../ui/Checked";
import InputV2 from "../../ui/InputV2";
=======
import  { useContext } from "react";
import InputSearch from "./inputSearch";
import InputFilter from "./inputFilter";
import Checked from "../../ui/Checked";
import { ThemeContext } from "../../theme/themeContext";
import ButtonSearch from "./ButtonSearch";
>>>>>>> Stashed changes
import ButtonFilter from "./ButtonFilter";
import ButtonSearch from "./ButtonSearch";

const SearchBar: React.FC = () => {
  const { handleFilterChange, handleSubmit, filters } = useFilterJobs();
  const { theme } = useTheme();

  return (
    <div
      className={`h-24 ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      } rounded-md m-auto px-2 w-[70%] mt-[-55px]  flex justify-center`}
    >
      <div className="h-full sm:w-[48%] md:w-[32%]">
        <InputV2
          value={filters.title}
          placeholder="Filter by title..."
          icon={<SearchIcon color="blue" />}
          onChange={(text) => handleFilterChange("title", text as string)}
        />
      </div>
      <div className="h-full w-[22%] sm:ml-6 sm:block md:hidden">
        <ButtonFilter />
      </div>
      <div className="h-full w-[32%] sm:ml-6 sm:hidden md:block">
        <InputV2
          value={filters.location}
          placeholder="Filter by location..."
          icon={<FilterIcon />}
          onChange={(text) => handleFilterChange("location", text as string)}
        />
      </div>
      <div className="h-full w-[22%] sm:hidden md:block flex">
        <Checkbox
          label="Full Time Only"
          checked={filters.isFullTime}
          onChange={(boolean) => handleFilterChange("isFullTime", boolean)}
        />
      </div>
      <div className="h-full w-[14%] md:block sm:hidden">
        <ButtonSearch onClick={handleSubmit}>Search</ButtonSearch>
      </div>
      <div className="h-full w-[14%] md:hidden sm:block">
        <ButtonSearch>
          <SearchIcon color="cardL" />
        </ButtonSearch>
      </div>
    </div>
  );
};

export default SearchBar;
