import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Slide, useScrollTrigger } from "@mui/material";
import MenuDrawer from "./MenuDrawer";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const onOpenDrawer = () => setIsOpenDrawer(true);
  const onCloseDrawer = () => setIsOpenDrawer(false);

  const onClickSearch = () => {
    console.log("click Search");
  };

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
                sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
              >
                My Gatsby Blog
              </Typography>
              <IconButton aria-label="검색하기" onClick={onClickSearch}>
                <SearchIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <MenuDrawer isOpen={isOpenDrawer} onCloseDrawer={onCloseDrawer} />
    </>
  );
};

export default Header;
