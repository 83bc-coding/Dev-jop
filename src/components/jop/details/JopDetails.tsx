import React from "react";
import BarDetails from "./BarInfo/BarDetails";
import Description from "./description/description";

import { useParams } from "react-router-dom";
import { GetJobDetails } from "./GetJobDetails";
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
        name={x.company}
        description={x.description}
        requirements={x.requirements}
        role={x.role}
      />
    </div>
  );
};

export default JopDetails;
