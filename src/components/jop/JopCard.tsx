import React, { useContext } from 'react'
import { ThemeContext } from '../theme/themeContext';
import JopInfo from './JopInfo';
import x from "../../assets/profile-picture-5.jpg";


const JopCard = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`          ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      }       h-[247px] lg:w-[30%] rounded pl-6 md:w-[47%] sm:w-[100%]   mt-8 flex flex-col justify-around `}
    >
      <div className="    h-14 w-14 mt-[-30px]   ">
        <img
          className="w-16 h-16 rounded-lg bg-blue shrink-0"
          src={x}
          alt="Rounded avatar"
        />
      </div>
      <JopInfo />
    </div>
  )
}

export default JopCard