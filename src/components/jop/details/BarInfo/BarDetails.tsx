import JopInfo from "../../Jops/JopInfo";
import LogoSmall from "./LogoSmall";
import CompanySite from "./CompanySite";
import LogoLarg from "./LogoLarg";
import Bar from "./Bar";
import { useJobDetails } from "../../../../store/JobDetalis/useJobDetails";
type props = {
  company: string;
  d: string;
  fill: string;
 
 };
const BarDetails = ({company,d,fill}:props) => {
    return (
    <Bar>
      <LogoSmall
        d={d}
        fill={fill}
      />
      <LogoLarg
         d={d}
         fill={fill}
       />
      
      <div className=" w-[150px] l-0  flex flex-col justify-center items-center  lg:ml-[-150px] md:ml-[-100px]  ">
        <JopInfo country="" time="" ago="" state={`${company}.com`} name={company} />
      </div>
      <CompanySite />
    </Bar>
  );
};

export default BarDetails;
