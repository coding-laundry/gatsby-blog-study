import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

type CategoryItemProps = {
  name: string;
  count: number;
  isSelected?: boolean;
};

const CategoryItem = ({
  name,
  count,
  isSelected = false,
}: CategoryItemProps) => {
  return (
    <Link to={`/category/${name}`}>
      <ListItem disablePadding secondaryAction={count}>
        <ListItemButton selected={isSelected}>
          <ListItemText primary={`${name.toUpperCase()}`} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default CategoryItem;
