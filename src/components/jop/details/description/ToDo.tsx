import Text from "../../../ui/Text";
import Desc from "../../../ui/Desc";
import ListsDecimal from "./ListsDecimal";
type props = {
  role: any;
};
const ToDo = ({ role }: props) => {
  return (
    <>
      <Text name={"What You Will Do"} />
      <Desc text={role?.content} />
      <ListsDecimal data={role} />
    </>
  );
};

export default ToDo;
