import React, { ChangeEvent, InputHTMLAttributes } from "react";
import useTheme from "../../hooks/useTheme";

type OnChangeValue = string | number | boolean;

interface InputV2Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (value: OnChangeValue) => void;
  icon?: React.ReactNode;
}

const InputV2 = ({ onChange, type = "text", icon, ...props }: InputV2Props) => {
  const { theme } = useTheme();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked, type } = event.target;

    if (type === "checkbox") {
      onChange(checked);
    } else if (type === "number") {
      onChange(value === "" ? "" : Number(value));
    } else {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center w-[100%] mx-auto h-full border-r-[1px] border-borderR">
      <div className="relative w-full">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={`${
            theme === "dark" ? "bg-cardD" : "bg-cardL"
          } text-gray-900 text-sm focus:outline-none block w-full ${
            icon ? "ps-12" : "ps-3"
          } p-2.5`}
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputV2;
