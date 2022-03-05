import styled from "@emotion/styled";
import { List, ListItem, Stack } from "@mui/material";
import React from "react";
import { TableItem } from "../../../types/postTypes";
import TableOfContentsItemButton from "./TableOfContentsItemButton";
import TableOfContentsList from "./TableOfContentsList";

const TableStack = styled(Stack)`
  width: 100%;
`;

interface TableOfContentsItemProps {
  item: TableItem;
}

const TableOfContentsItem = ({ item }: TableOfContentsItemProps) => {
  return (
    <ListItem disableGutters>
      <TableStack>
        <TableOfContentsItemButton item={item} />
        {item.items && <TableOfContentsList items={item.items} />}
      </TableStack>
    </ListItem>
  );
};

export default React.memo(TableOfContentsItem);
