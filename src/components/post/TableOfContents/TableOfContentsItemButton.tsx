import styled from "@emotion/styled";
import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { TableItem } from "../../../types/postTypes";

const HeaderListItemText = styled(ListItemText)``;

interface TableOfContentsItemButtonProps {
  item: TableItem;
}

const TableOfContentsItemButton = ({
  item,
}: TableOfContentsItemButtonProps) => {
  return (
    <ListItemButton component="a" href={item.url} selected={false}>
      <HeaderListItemText primary={item.title} />
    </ListItemButton>
  );
};

export default TableOfContentsItemButton;
