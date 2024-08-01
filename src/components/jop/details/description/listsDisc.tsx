import  { ReactNode } from "react";
import Li from "../../../ui/Li";

 

type Props = {
  children?: ReactNode;
  data: object;
};
const ListsDisc = ({   data }: Props) => {
  return (
    <ol
      className={`space-y-6   text-gray-500 list-disc list-inside dark:text-gray-400 mb-14`}
    >
      {data?.items.map((item: any, index: any) => (
        <Li key={index} text={item} />
      ))}
    </ol>
  );
};

export default ListsDisc;
