import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import { createCustomTheme } from "../../hooks/useCustomTheme";
interface RootProviderProps {
  children: React.ReactNode;
}

const RootProvider = ({ children }: RootProviderProps) => {
  const darkMode = useDarkMode();
  const [theme, setTheme] = useState(createCustomTheme("dark"));

  useEffect(() => {
    setTheme(createCustomTheme(darkMode.value ? "dark" : "light"));
  }, [darkMode.value]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default RootProvider;
