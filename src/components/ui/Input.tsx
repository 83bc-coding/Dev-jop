import { ReactNode, Ref } from "react";
import useTheme from "../../hooks/useTheme";

type props = {
  title: string;
  children: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>;
  value: string;
};
const Input = ({ children, title, onChange, value, ref }: props) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center w-[100%] mx-auto h-full  border-r-[1px] border-borderR">
      <div className="relative w-full">
        {children}
        <input
          type="text"
          id="simple-search"
          className={`${
            theme === "dark" ? "bg-cardD" : "bg-cardL"
          }   text-gray-900 text-sm      focus:outline-none block w-full ps-14 p-2.5`}
          placeholder={title}
          required
          onChange={onChange}
          ref={ref}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
