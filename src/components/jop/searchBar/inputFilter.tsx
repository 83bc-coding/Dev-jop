import React, { useContext, useRef, useState } from "react";
import Input from "../../ui/Input";
import FilterIcon from "../../icons/LocationIcon";
import { JobsContext } from "../../../store/JobDetalis/JobsContextProvider";
type props = {
  onChange?: any;
  ref?: any;
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
