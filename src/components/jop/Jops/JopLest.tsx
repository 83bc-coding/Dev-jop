import JopCard from "./JopCard";
import jobsData from "../../../assets/data.json";
import { useContext } from "react";
import { JobsContext } from "../../../store/JobDetalis/JobsContextProvider";
import includesText from "../../helper/includesText";

const JopList = () => {
  const { filterByInfos, filterByLocation, fullTimeOnly } =
    useContext(JobsContext);
  const filteredJobsData = jobsData.filter((jobData) => {
    let isFoundWithInfos = false;
    let isFoundWithLocation = false;
    let isFoundWithFullTime = false;

    if (filterByInfos)
      isFoundWithInfos =
        includesText(jobData.company, filterByInfos) ||
        includesText(jobData.position, filterByInfos);
    if (filterByLocation)
      isFoundWithLocation = includesText(jobData.location, filterByLocation);
    if (fullTimeOnly)
      isFoundWithFullTime = includesText(jobData.contract, "Full Time");

    if (filterByInfos && filterByLocation && fullTimeOnly)
      return isFoundWithInfos && isFoundWithLocation && isFoundWithFullTime;

    if (filterByInfos && filterByLocation)
      return isFoundWithInfos && isFoundWithLocation;

    if (filterByInfos && fullTimeOnly)
      return isFoundWithInfos && isFoundWithFullTime;

    if (filterByLocation && fullTimeOnly)
      return isFoundWithLocation && isFoundWithFullTime;

    if (filterByInfos) return isFoundWithInfos;
    if (filterByLocation) return isFoundWithLocation;
    if (fullTimeOnly) return isFoundWithFullTime;

    return true;
  });
  return (
    <>
      {filteredJobsData.map((job) => (
        <JopCard
          key={job?.id}
          ago={job?.postedAt}
          name={job?.position}
          state={job?.company}
          fill={job?.fill}
          bg={job?.logoBackground}
          time={job?.contract}
          country={job?.location}
          d={job?.logo}
          jobb={job}
          id={job?.id}
        />
      ))}
    </>
  );
};

export default JopList;
