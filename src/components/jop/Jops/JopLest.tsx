import JopCard from "./JopCard";
import jobsData from "../../../assets/data.json";

const JopList = () => {
  return (<> 
       {jobsData.map((job) => (
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
        />
      ))}
      </>
   );
};

export default JopList;
