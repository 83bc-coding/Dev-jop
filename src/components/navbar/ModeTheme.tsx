import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';
import Mode from '../ui/Mode';

const ModeTheme = () => {
    const { theme,setTheme } = useContext(ThemeContext);
    // onChange
    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
  return (
 <Mode onChange={handleThemeToggle}/>
  )
}

export default ModeTheme