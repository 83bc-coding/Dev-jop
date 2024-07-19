import React from "react";
import BarDetails from "./BarInfo/BarDetails";
 import Description from "./description/description";

const JopDetails = () => {
  return (
    <div className="flex flex-col ">
      <BarDetails />
      <Description/>
    </div>
  );
};

export default JopDetails;
