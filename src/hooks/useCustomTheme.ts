import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const useCustomTheme = (mode: "light" | "dark" = "light") => {
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

  return theme;
};
