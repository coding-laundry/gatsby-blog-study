import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
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
      <ListItem
        disablePadding
        secondaryAction={
          <Typography sx={{ color: "text.primary" }}>{count}</Typography>
        }
      >
        <ListItemButton selected={isSelected}>
          <ListItemText primary={`${name.toUpperCase()}`} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default CategoryItem;
