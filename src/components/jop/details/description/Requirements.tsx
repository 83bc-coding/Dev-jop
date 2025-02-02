 import Desc from "../../../ui/Desc";
import Text from "../../../ui/Text";
import ListsDisc from "./listsDisc";
type props = {
  requirements: any;
};
const Requirements = ({ requirements }: props) => {
  return (
    <>
      <Text name={"Requirements"} />
      <Desc text={requirements?.content} />
      <ListsDisc data={requirements} />
    </>
  );
};

export default Requirements;
