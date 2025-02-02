 import Input from "../../ui/Input";
import SearchIcon from "../../icons/SearchIcon";
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
