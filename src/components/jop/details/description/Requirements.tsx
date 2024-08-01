<<<<<<< Updated upstream
import React from "react";
import Desc from "../../../ui/Desc";
import Text from "../../../ui/Text";
import ListsDisc from "./listsDisc";
=======
  import Desc from "../../../ui/Desc";
import Text from "../../../ui/Text";
import ListsDisc from "../../../ui/ListsDisc";
>>>>>>> Stashed changes
type props = {
  requirements: any;
};
const Requirements = ({ requirements }: props) => {
  return (
    <>
      <Text name={"Requirements"} />
      <Desc text={requirements?.content} />
<<<<<<< Updated upstream
      <ListsDisc data={requirements} />
=======
      <ListsDisc data={requirements?.items} type={"disc"} />
>>>>>>> Stashed changes
    </>
  );
};

export default Requirements;
