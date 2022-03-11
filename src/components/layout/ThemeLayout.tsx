import { ThemeProvider, useTheme } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import useDarkMode from "use-dark-mode";
import { createCustomTheme } from "../../hooks/useCustomTheme";

const lightTheme = createCustomTheme("light");
const darkTheme = createCustomTheme("dark");

interface ThemeLayoutProps {
  children: React.ReactNode;
}

const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  const darkMode = useDarkMode();

  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
