import { useContext } from "react";
import SearchBar from "./components/jop/searchBar/SearchBar";
import Nav from "./components/navbar/nav";
import { ThemeContext, ThemeProvider } from "./components/theme/themeContext";
import Jop from "./components/jop/Jop";

function App() {
  return (
    <ThemeProvider>
      <AppWithContext />
    </ThemeProvider>
  );
}

const AppWithContext = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-0 m-0 min-h-dvh w-[100%]  ${
        theme === "dark" ? "bg-bodyD" : "bg-bodyL"
      }`}
    >
      <Nav />
      <SearchBar />
      <Jop/>
    </div>
  );
};

export default App;
