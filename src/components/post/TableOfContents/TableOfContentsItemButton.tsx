import styled from "@emotion/styled";
import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { TableItem } from "../../../types/postTypes";

const HeaderListItemText = styled(ListItemText)``;

interface TableOfContentsItemButtonProps {
  item: TableItem;
  selectedId: string;
}

const TableOfContentsItemButton = ({
  item,
  selectedId,
}: TableOfContentsItemButtonProps) => {
  return (
    <ListItemButton
      component="a"
      href={item.url}
      selected={selectedId === item.url.slice(1)}
    >
      <HeaderListItemText primary={item.title} />
    </ListItemButton>
  );
};

export default TableOfContentsItemButton;
