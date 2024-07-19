import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../../theme/themeContext";
type props = {
  name?: string;
  time?: string;
  ago?: string;
  country?: string;
  state?: string;
  children?: ReactNode;
  onClick?: any;
};
const JopInfo = ({ name, time, ago, country, state, children ,onClick}: props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="flex items-baseline gap-6">
        <p className="text-[1rem] text-info font-normal">{ago}</p>
        {children}
        <p className="text-[1rem] text-info font-normal">{time}</p>
      </div>

      <p
        className={`text-[1.2rem] font-bold m-0 p-0     ${
          theme === "dark" ? "text-cardL" : "text-nameJ "
        }
             cursor-pointer hover:opacity-50`}
        onClick={onClick}
      >
        {name}
      </p>
      <p className="text-[1rem] text-info font-normal">{state}</p>

      <p className="mb-2 text-[0.87rem] text-state font-bold">{country}</p>
    </>
  );
};

export default JopInfo;
