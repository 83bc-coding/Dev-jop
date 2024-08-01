<<<<<<< Updated upstream
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
=======
 import Text from "../../../ui/Text";
import Desc from "../../../ui/Desc";
import Lists from "../../../ui/ListsDisc";
 type props = {
  role?:any;
 }
const ToDo = ( {role}:props) => {
  role
  return (
    <>
      <Text name={"What You Will Do"} />
      <Desc text={" v sgf gf"} />
      <Lists type={"disc"} />
>>>>>>> Stashed changes
    </>
  );
};

export default ToDo;
