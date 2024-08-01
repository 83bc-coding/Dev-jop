<<<<<<< Updated upstream
import { ReactNode } from "react";
import useTheme from "../../../../hooks/useTheme";

=======
import  { ReactNode, useContext } from "react";
import { ThemeContext } from "../../../theme/themeContext";
>>>>>>> Stashed changes
type props = {
  children?: ReactNode;
};

const Bar = ({ children }: props) => {
  const { theme } = useTheme();

  return (
    <div
      className={`md:h-24 sm:h-64 ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      } rounded-md m-auto mb-[50px] w-[57%] mt-[-35px] flex md:flex-row  justify-between items-center pr-5 sm:flex-col`}
    >
      {children}
    </div>
  );
};

export default Bar;
