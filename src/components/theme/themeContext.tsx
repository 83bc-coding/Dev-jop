import { createContext, useState, ReactNode } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (newTheme: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (newTheme) => {
    return newTheme === "light" ? "light" : "dark";
  },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// import { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';

// const MyComponent = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div
//       className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} text-${
//         theme === 'dark' ? 'white' : 'gray-800'
//       } p-4`}
//     >
//       {/* 组件内容 */}
//     </div>
//   );
// };
