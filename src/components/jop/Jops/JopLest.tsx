import JopCard from "./JopCard";
import jobsData from "../../../assets/data.json";
import { useContext } from "react";
import { JobsContext } from "../../../store/JobDetalis/JobsContextProvider";
import includesText from "../../helper/includesText";

const JopList = () => {
  const { filterByInfos, filterByLocation, fullTimeOnly } =
    useContext(JobsContext);

  const filteredJobsData = jobsData.filter(
    ({ company, position, location, contract }) => {
      const matchesInfos = filterByInfos
        ? includesText(company, filterByInfos) ||
          includesText(position, filterByInfos)
        : true;
      const matchesLocation = filterByLocation
        ? includesText(location, filterByLocation)
        : true;
      const matchesFullTime = fullTimeOnly
        ? includesText(contract, "Full Time")
        : true;
      return matchesInfos && matchesLocation && matchesFullTime;
    }
  );
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
