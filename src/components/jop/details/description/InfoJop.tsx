import React from "react";
import JopInfo from "../../Jops/JopInfo";
import ButtonSearch from "../../searchBar/ButtonSearch";

const InfoJop = () => {
  return (
    <div className="   w-[95%]    h-auto  flex sm:flex-col md:flex-row justify-between items-center  content-between   ">
      <div>
        <JopInfo
          country="Japan"
          time="full Time"
          ago="5d ago"
          name="Senior Software Engineer"
        >
          <span className="w-1 h-1 rounded-full bg-info "> </span>
        </JopInfo>
      </div>
      <ButtonSearch w="sm:w-[90%] md:w-32 ">Apply Now</ButtonSearch>
    </div>
  );
};

export default InfoJop;
