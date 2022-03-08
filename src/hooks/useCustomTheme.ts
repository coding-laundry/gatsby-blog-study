import { useState } from "react";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const MODE_KEY = "mode";

type ModeType = "light" | "dark";

export const useCustomTheme = () => {
  const storedMode = localStorage.getItem(MODE_KEY) as ModeType;
  const [mode, setMode] = useState<ModeType>(storedMode ?? "light");

  const commonTheme = {
    typography: {
      fontFamily: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
      "Malgun Gothic", sans-serif`,
    },
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark" && {
        divider: grey[700],
        background: {
          default: "#282c35",
          paper: "#282c35",
        },
      }),
    },
    ...commonTheme,
  });

  const toggleMode = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
    localStorage.setItem(MODE_KEY, mode);
  };

  return { theme, toggleMode };
};
