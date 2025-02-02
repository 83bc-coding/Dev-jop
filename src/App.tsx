import { BrowserRouter, Route, Routes } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import Jop from "./components/jop/Jops/Jop";
import JopDetails from "./components/jop/details/JopDetails";
import SearchBar from "./components/jop/searchBar/SearchBar";
import Nav from "./components/layout/navbar/nav";
import { ThemeProvider } from "./components/theme/themeContext";

function App() {
  return (
    <ThemeProvider>
      <AppWithContext />
    </ThemeProvider>
  );
}

const AppWithContext = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-0 m-0 min-h-dvh w-[100%]  ${
        theme === "dark" ? "bg-bodyD" : "bg-bodyL"
      }`}
    >
      {" "}
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                {" "}
                <SearchBar />
                <Jop />
              </>
            }
          />
          <Route path="details/:id" element={<JopDetails />} />
        </Routes>
      </BrowserRouter>{" "}
      {/* <JopDetails /> */}
    </div>
  );
};

export default App;
