import   { ReactNode } from "react";
import Li from "./Li";
type props = {
  children?: ReactNode;
  type: string;
  data?: any;
};
const ListsDisc = ({  data }: props) => {
  return (
    <ol
      className={`space-y-6   text-gray-500 list-disc list-inside dark:text-gray-400 mb-14`}
    >
      {data.map((item:string, index:number) => (
        <Li key={index} text={item} />
      ))}
    </ol>
  );
};

export default ListsDisc;
