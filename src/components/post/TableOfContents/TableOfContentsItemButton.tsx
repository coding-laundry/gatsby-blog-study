import styled from "@emotion/styled";
import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { TableItem } from "../../../types/postTypes";

const HeaderListItemText = styled(ListItemText)``;

interface TableOfContentsItemButtonProps {
  item: TableItem;
  selected: boolean;
}

const TableOfContentsItemButton = ({
  item,
  selected = false,
}: TableOfContentsItemButtonProps) => {
  return (
    <ListItemButton component="a" href={item.url} selected={selected}>
      <HeaderListItemText primary={item.title} />
    </ListItemButton>
  );
};

export default TableOfContentsItemButton;
