<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import JopInfo from "./JopInfo";
import LogoSmall from "./LogoSmall";

=======
import   { useContext } from "react";
import { ThemeContext } from "../../theme/themeContext";
import JopInfo from "./JopInfo";
import LogoSmall from "./LogoSmall";
 import {   useNavigate } from "react-router-dom";
>>>>>>> Stashed changes
type props = {
  name: string;
  ago: string;
  time: string;
  state: string;
  country: string;
  d: string;
  fill: string;
  bg: string;
  jobb: object;
  id: number;
};
const JopCard = ({
  bg,
  name,
  ago,
  time,
  state,
  country,
  d,
  fill,
  id,
}: props) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleAddJob = () => {
    navigate(`/details/${id.toString()}`);
  };

  return (
    <div
      className={`          ${
        theme === "dark" ? "bg-cardD" : "bg-cardL"
      }       h-[247px] lg:w-[30%] rounded pl-6 md:w-[47%] sm:w-[100%]   mt-8 flex flex-col justify-around `}
    >
      <LogoSmall d={d} fill={fill} bg={bg} />

      <JopInfo
        name={name}
        ago={ago}
        time={time}
        state={state}
        country={country}
        onClick={handleAddJob}
      >
        <span className="w-1 h-1 rounded-full bg-info "> </span>
      </JopInfo>
    </div>
  );
};

export default JopCard;
