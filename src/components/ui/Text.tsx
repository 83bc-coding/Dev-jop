import React, { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";
type props = {
  name: string;
};
const Text = ({ name }: props) => {
  const { theme } = useContext(ThemeContext);

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
