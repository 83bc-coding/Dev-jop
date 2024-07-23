import React from "react";
import Switch from "../ui/Switch";
import useTheme from "../Hook/useTheme";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  // onChange
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <Switch onChange={handleThemeToggle} />;
};

export default ThemeSwitch;
