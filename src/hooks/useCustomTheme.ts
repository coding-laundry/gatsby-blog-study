import { useEffect, useRef, useState } from "react";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const MODE_KEY = "mode";

export type ModeType = "light" | "dark";

export const createCustomTheme = (mode: ModeType) =>
  createTheme({
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
    typography: {
      fontFamily: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif`,
    },
  });

export const useCustomTheme = () => {
  const storedMode = useRef<ModeType>("light");
  const [mode, setMode] = useState<ModeType>(storedMode.current);

  useEffect(() => {
    storedMode.current = localStorage.getItem(MODE_KEY) as ModeType;
    setMode(storedMode.current);
  }, []);

  const toggleMode = () => {
    setMode((mode) => {
      const nextMode = mode === "light" ? "dark" : "light";
      localStorage.setItem(MODE_KEY, nextMode);
      return nextMode;
    });
  };

  const theme = createCustomTheme(mode);

  return { theme, toggleMode };
};
