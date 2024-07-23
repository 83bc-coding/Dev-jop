import React from "react";
import BarDetails from "./BarInfo/BarDetails";
import Description from "./description/description";

import { useParams } from "react-router-dom";
import { GetJobDetails } from "./GetJobDetails";
import BarDown from "./barDown/BarDown";
const JopDetails = () => {
  const x = GetJobDetails();
  console.log(x, "ffff");
  return (
    <div className="flex flex-col ">
      <BarDetails company={x.company} d={x.logo} fill={x.fill} />

      <Description
        country={x.location}
        time={x.postedAt}
        ago={x.postedAt}
        name={x.position}
        description={x.description}
        requirements={x.requirements}
        role={x.role}
      />
      <BarDown name={x.position} state={x.company}/>
    </div>
  );
};

export default JopDetails;
