import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import { theme } from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      learn react
    </ThemeProvider>
  );
}

export default App;
