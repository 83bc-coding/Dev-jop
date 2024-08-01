<<<<<<< Updated upstream
import { Ref } from "react";
import FilterIcon from "../../icons/LocationIcon";
import Input from "../../ui/Input";
=======
 import Input from '../../ui/Input'
import FilterIcon from '../../ui/LocationIcon'
>>>>>>> Stashed changes

type props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>;
  value: string;
};

const InputFilter = ({ onChange, value, ref }: props) => {
  return (
    <Input
      title="Filter by location..."
      onChange={onChange}
      value={value}
      ref={ref}
    >
      <FilterIcon />
    </Input>
  );
};

export default InputFilter;
