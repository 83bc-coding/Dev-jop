import JopCard from "./JopCard";
import jobsData from "../../../assets/data.json";
import { useContext } from "react";
import { JobsContext } from "../../../store/JobDetalis/JobsContextProvider";
import includesText from "../../helper/includesText";

const JopList = () => {
  const { filterByInfos, filterByLocation, fullTimeOnly } =
    useContext(JobsContext);
    
    const filteredJobsData = jobsData.filter((jobData) => {
      const matchesInfos = filterByInfos ? includesText(jobData.company, filterByInfos) || includesText(jobData.position, filterByInfos) : true;
      const matchesLocation = filterByLocation ? includesText(jobData.location, filterByLocation) : true;
      const matchesFullTime = fullTimeOnly ? includesText(jobData.contract, "Full Time") : true;
      return matchesInfos && matchesLocation && matchesFullTime;
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
