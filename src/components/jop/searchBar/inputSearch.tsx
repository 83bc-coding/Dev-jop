import SearchIcon from "../../icons/SearchIcon";
import Input from "../../ui/Input";

type props = {
  onChange?: any;
  ref?: any;
  value: string;
};

const InputSearch = ({ onChange, value, ref }: props) => {
  return (
    <Input
      title="Filter by title .."
      onChange={onChange}
      value={value}
      ref={ref}
    >
      <SearchIcon color="blue" />
    </Input>
  );
};

export default InputSearch;
