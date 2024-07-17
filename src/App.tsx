import { ThemeProvider } from "./components/theme/themeContext";

import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="container   h-100 w-100 bg-blue"></div>
      </ThemeProvider>
    </>
  );
}

export default App;
