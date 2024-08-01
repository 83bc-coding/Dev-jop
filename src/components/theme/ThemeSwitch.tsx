import useTheme from "../../hooks/useTheme";
import Switch from "../ui/Switch";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  // onChange
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <Switch onChange={handleThemeToggle} />;
};

export default ThemeSwitch;
