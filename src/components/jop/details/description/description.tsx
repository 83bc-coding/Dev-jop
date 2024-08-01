 import Bar from "./Bar";
import InfoJop from "./InfoJop";
import Desc from "../../../ui/Desc";
import Requirements from "./Requirements";
import ToDo from "./ToDo";
type props = {
  country: string;
  time: string;
  ago: string;
  name: string;
  description: string;
  requirements: object;
  role: object;
};
const Description = ({
  role,
  requirements,
  country,
  time,
  ago,
  name,
  description,
}: props) => {
  return (
    <Bar>
      <InfoJop country={country} time={time} ago={ago} name={name} />

      <Desc text={description} />

      <Requirements requirements={requirements} />
      <ToDo role={role} />
    </Bar>
  );
};

export default Description;
