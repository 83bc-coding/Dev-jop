import { useContext } from "react";
import SearchBar from "./components/jop/searchBar/SearchBar";
import Nav from "./components/navbar/nav";
import { ThemeContext, ThemeProvider } from "./components/theme/themeContext";
import Jop from "./components/jop/Jops/Jop";
import JopDetails from "./components/jop/details/JopDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
