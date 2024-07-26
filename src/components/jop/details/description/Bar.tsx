import { ReactNode } from "react";
import useTheme from "../../../../hooks/useTheme";

type props = {
  children?: ReactNode;
};
const Bar = ({ children }: props) => {
  const { theme } = useTheme();

  return (
    <div
      className={`h-auto min-h-96 p-8 ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      } rounded-md m-auto mt-6  w-[57%] mt-[-35px] flex md:flex-col  justify-between items-start p-5 sm:flex-col`}
    >
      {children}
    </div>
  );
};

export default Bar;
