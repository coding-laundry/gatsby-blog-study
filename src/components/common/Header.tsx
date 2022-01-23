import React from "react";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";

const Header = () => {
  const onClickMenu = () => {
    console.log("click menu");
  };

  const onClickSearch = () => {
    console.log("click Search");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="inherit" sx={{ boxShadow: 0 }}>
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={onClickMenu}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="h3"
              sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
            >
              My Gatsby Blog
            </Typography>
            <IconButton
              aria-label="search"
              color="inherit"
              onClick={onClickSearch}
            >
              <SearchIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
