import { ReactNode } from "react";
import useTheme from "../../../../hooks/useTheme";
type props = {
  children?: ReactNode;
};
const Bar = ({ children }: props) => {
  const { theme } = useTheme();

  return (
    <div
      className={`md:h-24 sm:h-64 ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      } rounded-md  bg-blue m-auto mb-[0px] w-[70%] mt-[35px] flex md:flex-row  justify-between items-center pr-5 sm:flex-col`}
    >
      {children}
    </div>
  );
};

export default Bar;
