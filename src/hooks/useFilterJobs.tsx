// useSearchBar.tsx
import { useState } from "react";
import { useJobs } from "../store/JobDetalis/JobsContextProvider";

type Filters = {
  title: string;
  location: string;
  isFullTime: boolean;
};

const useFilterJobs = () => {
  const { updateFilterParams } = useJobs();

  const [filters, setFilters] = useState<Filters>({
    title: "",
    location: "",
    isFullTime: false,
  });

  const handleFilterChange = (
    filter: keyof Filters,
    value: string | boolean
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));
  };

  const handleSubmit = () => {
    updateFilterParams(filters.title, filters.location, filters.isFullTime);
  };

  return { handleFilterChange, handleSubmit, filters };
};

export default useFilterJobs;
