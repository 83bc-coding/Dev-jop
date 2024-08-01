<<<<<<< Updated upstream
import useTheme from "../../hooks/useTheme";

=======
import  { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";
>>>>>>> Stashed changes
type props = {
  name: string;
};
const Text = ({ name }: props) => {
  const { theme } = useTheme();

  return (
    <p
      className={`text-[1.2rem] font-bold m-0 p-0     ${
        theme === "dark" ? "text-cardL" : "text-nameJ "
      }          `}
    >
      {name}
    </p>
  );
};

export default Text;
