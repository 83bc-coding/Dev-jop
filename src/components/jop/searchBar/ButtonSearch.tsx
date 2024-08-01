import { ReactNode } from "react";
import Button from "../../ui/Button";

type props = {
  w?: string;
  children?: ReactNode;
  onClick?: any;
};
const ButtonSearch = ({ children, w, onClick }: props) => {
  return (
    <Button w={w} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonSearch;
