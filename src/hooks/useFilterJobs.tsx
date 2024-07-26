// useSearchBar.tsx
import { useCallback, useContext, useRef, useState } from "react";
import { JobsContext } from "../store/JobDetalis/JobsContextProvider";

const useFilterJobs = () => {
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

  const submitSearchHandler = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (isSettingsModalOpen) setIsSettingsModalOpen(false);

      updateFilterParams(
        filterByInfosValue,
        filterByLocationValue,
        fullTimeOnlyChecked
      );
    },
    [
      isSettingsModalOpen,
      filterByInfosValue,
      filterByLocationValue,
      fullTimeOnlyChecked,
      updateFilterParams,
    ]
  );

  const changeInputInfosHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilterByInfosValue(e.target.value);
    },
    [setFilterByInfosValue]
  );

  const changeInputLocationHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilterByLocationValue(e.target.value);
    },
    [setFilterByLocationValue]
  );

  const changeCheckboxValueHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFullTimeOnlyChecked(e.target.checked);
    },
    [setFullTimeOnlyChecked]
  );

  return {
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
  };
};

export default useFilterJobs;
