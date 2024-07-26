import { createContext, ReactNode, useContext, useState } from "react";

type JobsContextValue = {
  filterByInfos: string;
  filterByLocation: string;
  fullTimeOnly: boolean;
  updateFilterParams: (
    title: string,
    location: string,
    fullTime: boolean
  ) => void;
};

const JobsContext = createContext<JobsContextValue | undefined>(undefined);

export const JobsProvider = ({ children }: { children: ReactNode }) => {
  const [filterByInfos, setFilterByInfos] = useState("");
  const [filterByLocation, setFilterByLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  const updateFilterParams = (
    title: string,
    location: string,
    fullTime: boolean
  ) => {
    setFilterByInfos(title);
    setFilterByLocation(location);
    setFullTimeOnly(fullTime);
  };

  const value = {
    filterByInfos,
    filterByLocation,
    fullTimeOnly,
    updateFilterParams,
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};

export default JobsProvider;

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobsProvider");
  }
  return context;
};
