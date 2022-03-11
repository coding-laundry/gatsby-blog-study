import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import useDarkMode from "use-dark-mode";
import { createCustomTheme } from "../../hooks/useCustomTheme";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

interface ThemeLayoutProps {
  children: React.ReactNode;
}

const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  const darkMode = useDarkMode();

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const theme2 = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode.value ? "dark" : "light",
        },
      }),
    [darkMode.value]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeLayout;
