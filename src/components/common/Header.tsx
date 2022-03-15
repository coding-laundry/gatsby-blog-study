import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  Container,
  Slide,
  styled,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import { Link } from "gatsby";
import ProgressBar from "./ProgressBar";

const HeadTitleLink = styled(Link)`
  text-align: center;
  color: ${({ theme }) => `${theme.palette.text.primary}`};
`;

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

interface HeaderProps {
  toggleMode: () => void;
}

const Header = ({ toggleMode }: HeaderProps) => {
  const theme = useTheme();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const onOpenDrawer = () => setIsOpenDrawer(true);
  const onCloseDrawer = () => setIsOpenDrawer(false);

  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" color="inherit" elevation={0}>
          <Container>
            <Toolbar>
              <IconButton
                edge="start"
                aria-label="메뉴 열기"
                onClick={onOpenDrawer}
              >
                <MenuIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <Typography
                component="h2"
                variant="h6"
                noWrap
                sx={{
                  flexGrow: 1,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                <HeadTitleLink to="/">My Gatsby Blog</HeadTitleLink>
              </Typography>
              <Link to="/search">
                <IconButton aria-label="검색하기">
                  <SearchIcon sx={{ fontSize: 32 }} />
                </IconButton>
              </Link>
              <IconButton aria-label="테마 변경" onClick={toggleMode}>
                {theme.palette.mode === "light" ? (
                  <LightModeIcon sx={{ fontSize: 32 }} />
                ) : (
                  <DarkModeIcon sx={{ fontSize: 32 }} />
                )}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <ProgressBar />
      <MenuDrawer isOpen={isOpenDrawer} onCloseDrawer={onCloseDrawer} />
    </>
  );
};

export default Header;
