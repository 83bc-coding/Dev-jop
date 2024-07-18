import React, { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";

const JopInfo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="flex items-baseline gap-6">
        <p className="text-[1rem] text-info font-normal">1d ago</p>
        <span className="w-1 h-1 rounded-full bg-info "> </span>
        <p className="text-[1rem] text-info font-normal">Part Time</p>
      </div>

      <p
        className={`text-[1.2rem] font-bold m-0 p-0     ${
          theme === "dark" ? "text-cardL" : "text-nameJ "
        }     cursor-pointer hover:opacity-50`}
      >
        Haskell and PureScript Dev
      </p>
      <p className="text-[1rem] text-info font-normal">Blogr</p>

      <p className="mb-2 text-[0.87rem] text-state font-bold">Japan</p>
    </>
  );
};

export default JopInfo;
