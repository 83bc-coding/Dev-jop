import React from "react";
import JopInfo from "../../Jops/JopInfo";
import ButtonSearch from "../../searchBar/ButtonSearch";
type props = {
  country: string;
  time: string;
  ago: string;
  name: string;
};
const InfoJop = ({country,time,ago,name}:props) => {
  return (
    <div className="   w-[95%]    h-auto  flex sm:flex-col md:flex-row justify-between items-center  content-between   ">
      <div>
        <JopInfo
          country={country}
          time={time}
          ago={ago}
          name={name}
        >
         </JopInfo>
      </div>
      <ButtonSearch w="sm:w-[90%] md:w-32 ">Apply Now</ButtonSearch>
    </div>
  );
};

export default InfoJop;
