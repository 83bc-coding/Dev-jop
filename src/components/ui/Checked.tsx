<<<<<<< Updated upstream
import { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";
import useTheme from "../../hooks/useTheme";
=======
import   { useContext } from "react";
import { ThemeContext } from "../theme/themeContext";
>>>>>>> Stashed changes

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label: string;
  onChange: (checked: boolean) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, onChange, className = "", ...props }, ref) => {
    const { theme } = useTheme();

    const isDark = theme === "dark";

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    };

    return (
      <div className="flex items-center">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            ref={ref}
            onChange={handleChange}
            className={`
              form-checkbox h-5 w-5 rounded
              text-blue-600 border-gray-300
              focus:ring-blue-500 focus:ring-2 focus:ring-offset-2
              ${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}
              transition duration-150 ease-in-out
              ${className}
            `}
            {...props}
          />
          <span
            className={`ml-2 text-sm font-medium
              ${isDark ? "text-gray-300" : "text-gray-900"}
            `}
          >
            {label}
          </span>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
