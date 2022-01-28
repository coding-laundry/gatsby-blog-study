import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

const CategoryItem = ({ name, count }) => {
  return (
    <Link to={`/category/${name}`}>
      <ListItem disablePadding secondaryAction={count}>
        <ListItemButton selected={false}>
          <ListItemText primary={`${name.toUpperCase()}`} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default CategoryItem;
