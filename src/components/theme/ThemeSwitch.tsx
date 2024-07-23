import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import Switch from "../ui/Switch";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // onChange
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <Switch onChange={handleThemeToggle} />;
};

export default ThemeSwitch;
