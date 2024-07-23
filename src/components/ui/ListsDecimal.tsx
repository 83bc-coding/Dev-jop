import React, { ReactNode } from "react";
import Li from "./Li";

type Props = {
  data: object;
};
const ListsDecimal = ({ data }: Props) => {
  return (
    <ol
      className={`space-y-6   text-gray-500 list-decimal list-inside dark:text-gray-400 mb-14`}
    >
      {data?.items.map((item: any, index: any) => (
        <Li key={index} text={item} />
      ))}
    </ol>
  );
};

export default ListsDecimal;
