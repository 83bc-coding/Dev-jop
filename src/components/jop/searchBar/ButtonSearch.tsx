import React, { ReactNode, useContext } from "react";
import Button from "../../ui/Button";
import { JobsContext } from "../../../store/JobDetalis/JobsContextProvider";
type props = {
  w?: string;
  children?: ReactNode;
  onClick?:any

};
const ButtonSearch = ({ children, w,onClick }: props) => {
 
  return <Button w={w} onClick={onClick}>{children}</Button>;
};

export default ButtonSearch;
