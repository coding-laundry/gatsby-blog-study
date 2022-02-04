import { Drawer } from "@mui/material";
import React from "react";

const MenuDrawer = ({ isOpen, onCloseDrawer }) => {
  return (
    <Drawer open={isOpen} onClose={onCloseDrawer}>
      <div>hello world</div>
    </Drawer>
  );
};

export default MenuDrawer;
