import styled from "@emotion/styled";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import Profile from "./Profile";

const MenuBox = styled(Box)`
  width: 300px;
`;

const ProfileListItem = styled(ListItem)`
  text-align: center;
`;

type MenuDrawerProps = {
  isOpen: boolean;
  onCloseDrawer: () => void;
};

type ListTableType = {
  [key: string]: JSX.Element;
};

const MenuDrawer = ({ isOpen, onCloseDrawer }: MenuDrawerProps) => {
  const listTable: ListTableType = {
    home: <HomeRoundedIcon />,
    category: <CategoryRoundedIcon />,
    tags: <LocalOfferRoundedIcon />,
    search: <SearchRoundedIcon />,
    about: <PersonPinRoundedIcon />,
  };

  return (
    <Drawer open={isOpen} onClose={onCloseDrawer}>
      <MenuBox>
        <List>
          <ProfileListItem disablePadding>
            <Profile direction="column" />
          </ProfileListItem>
          <Divider />
          {Object.keys(listTable).map((key) => (
            <Link to={`/${key === "home" ? "" : key}`} key={key}>
              <ListItem disablePadding>
                <ListItemButton selected={false}>
                  <ListItemIcon aria-label={key}>{listTable[key]}</ListItemIcon>
                  <ListItemText primary={key.toUpperCase()} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          <Divider />
        </List>
      </MenuBox>
    </Drawer>
  );
};

export default MenuDrawer;
