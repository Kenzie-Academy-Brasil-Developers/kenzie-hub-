import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { RoutesComponent } from "./routes";
import { Global } from "./style/global";
import { darkTheme, mainTheme } from "./style/theme";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
      <div className="App">
        {/* <button onClick={() => console.log("oi")}>Alternar tema</button> */}
        <Global />
        <RoutesComponent />
        {/* setDarkMode(!darkMode) */}
      </div>
    </ThemeProvider>
  );
};
