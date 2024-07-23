import { createContext, useState, ReactNode } from "react";

type JobsContextValue = {
  filterByInfos: string;
  filterByLocation: string;
  fullTimeOnly: boolean;
  updateFilterParams: (
    filterByInfosValue: string,
    filterByLocationValue: string,
    isFullTimeOnlyChecked: boolean
  ) => void;
};

const initialContextValue: JobsContextValue = {
  filterByInfos: "",
  filterByLocation: "",
  fullTimeOnly: false,
  updateFilterParams: () => {},
};

const JobsContext = createContext<JobsContextValue>(initialContextValue);

type JobsContextProviderProps = {
  children: ReactNode;
};

const JobsContextProvider = ({ children }: JobsContextProviderProps) => {
  const [filterByInfos, setFilterByInfos] = useState(
    initialContextValue.filterByInfos
  );
  const [filterByLocation, setFilterByLocation] = useState(
    initialContextValue.filterByLocation
  );
  const [fullTimeOnly, setFullTimeOnly] = useState(
    initialContextValue.fullTimeOnly
  );

  const updateFilterParams = (
    filterByInfosValue: string,
    filterByLocationValue: string,
    isFullTimeOnlyChecked: boolean
  ) => {
    setFilterByInfos(filterByInfosValue);
    setFilterByLocation(filterByLocationValue);
    setFullTimeOnly(isFullTimeOnlyChecked);
  };

  const contextValue: JobsContextValue = {
    filterByInfos,
    filterByLocation,
    fullTimeOnly,
    updateFilterParams,
  };

  return (
    <JobsContext.Provider value={contextValue}>{children}</JobsContext.Provider>
  );
};

export { JobsContext };
export default JobsContextProvider;
