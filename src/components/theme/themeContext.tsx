import { createContext, useState, ReactNode } from "react";

export type ThemeContextType = {
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
