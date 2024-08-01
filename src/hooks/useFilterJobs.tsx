// useSearchBar.tsx
import { useState } from "react";
import { useJobs } from "../store/JobDetalis/JobsContextProvider";

type Filters = {
  title: string;
  location: string;
  isFullTime: boolean;
};

/* 
  These comments are meant to help you understand the code, @83bc-coding
  ---------------------------------
  Refactored by Nader Abdulrub
*/

const useFilterJobs = () => {
  // This line gets the updateFilterParams function from the JobsContext
  // It's used to update the filters in the global state
  const { updateFilterParams } = useJobs();

  // This useState hook creates an object to store the filter values
  // It starts with empty strings for title and location, and false for isFullTime
  const [filters, setFilters] = useState<Filters>({
    title: "",
    location: "",
    isFullTime: false,
  });

  /* 
   This function is used to update the filter values:
   - It's called when the user types in an input or checks a box
   - Parameters: 
     * filter: specifies which filter to change (title, location, or isFullTime)
     * value: the new value for the filter
   - It uses the spread operator (...) to keep all other filter values the same
     and only update the specified filter
  */
  const handleFilterChange = (
    filter: keyof Filters,
    value: string | boolean
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));
  };

  // This function is called when the user wants to apply the filters
  // It sends the current filter values to the global state using updateFilterParams
  const handleSubmit = () => {
    updateFilterParams(filters.title, filters.location, filters.isFullTime);
  };

  // The hook returns these functions and the filters object
  // They can be used in other components to manage and apply the filters
  return { handleFilterChange, handleSubmit, filters };
};

export default useFilterJobs;

// To use this hook in a component:
// const { handleFilterChange, handleSubmit, filters } = useFilterJobs();
// You can then use these in your JSX, like:
// <input value={filters.title} onChange={(e) => handleFilterChange('title', e.target.value)} />
// <button onClick={handleSubmit}>Apply Filters</button>
