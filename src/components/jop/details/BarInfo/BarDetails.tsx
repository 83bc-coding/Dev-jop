import JopInfo from "../../Jops/JopInfo";
import LogoSmall from "./LogoSmall";
import CompanySite from "./CompanySite";
import LogoLarg from "./LogoLarg";
import Bar from "./Bar";
import { useJobDetails } from "../../../../store/JobDetalis/useJobDetails";
const BarDetails = () => {
  const { job } = useJobDetails();
console.log("00",job?.company)
  return (
    <Bar>
      <LogoSmall
        d={ job?.logo}
        fill={job?.fill}
      />
      <LogoLarg
         d={ job?.logo}
         fill={job?.fill}
      />
      
      <div className=" w-[150px] l-0  flex flex-col justify-center items-center  lg:ml-[-150px] md:ml-[-100px]  ">
        <JopInfo country="" time="" ago="" state={`${job?.company}.com`} name="socer" />
      </div>
      <CompanySite />
    </Bar>
  );
};

export default BarDetails;
