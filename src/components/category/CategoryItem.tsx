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
  const linkSeparator = name === "all" ? "/" : `/category/${name}`;
  return (
    <Link to={linkSeparator}>
      <ListItem disablePadding secondaryAction={count}>
        <ListItemButton selected={isSelected}>
          <ListItemText primary={`${name.toUpperCase()}`} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default CategoryItem;
