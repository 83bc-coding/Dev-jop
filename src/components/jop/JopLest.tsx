import React, { useContext } from "react";
import x from "../../assets/profile-picture-5.jpg";
import { ThemeContext } from "../theme/themeContext";
const JopLest = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div className={`          ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      }       h-[247px] lg:w-[30%] rounded pl-6 md:w-[47%] sm:w-[100%]   mt-8 flex flex-col justify-around `}>
      <div className="    h-14 w-14 mt-[-30px]   ">
        <img
          className="w-16 h-16 rounded-lg bg-blue shrink-0"
          src={x}
          alt="Rounded avatar"
        />
      </div>
      <div className="flex items-baseline gap-6">
        <p className="text-[1rem] text-info font-normal">1d ago</p>
        <span className="w-1 h-1 rounded-full bg-info "> </span>
        <p className="text-[1rem] text-info font-normal">Part Time</p>
      </div>

      <p className={`text-[1.2rem] font-bold m-0 p-0     ${
        theme === "dark" ? "text-cardL" : "text-nameJ "
      }     cursor-pointer hover:opacity-50`}>Haskell and PureScript Dev</p>
      <p className="text-[1rem] text-info font-normal">Blogr</p>

      <p className="mb-2 text-[0.87rem] text-state font-bold">Japan</p>
    </div>
  );
};

export default JopLest;
