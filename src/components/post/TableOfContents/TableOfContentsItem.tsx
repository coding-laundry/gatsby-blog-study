import styled from "@emotion/styled";
import { List, ListItem, Stack } from "@mui/material";
import React from "react";
import { TableItem } from "../../../types/postTypes";
import TableOfContentsItemButton from "./TableOfContentsItemButton";

const TableStack = styled(Stack)`
  width: 100%;
`;

const NestedList = styled(List)`
  border-left: 1px solid lightgray;
  margin-left: 1rem;
`;

interface TableOfContentsItemProps {
  item: TableItem;
}

const TableOfContentsItem = ({ item }: TableOfContentsItemProps) => {
  return (
    <ListItem disableGutters>
      <TableStack>
        <TableOfContentsItemButton item={item} />
        <NestedList disablePadding dense>
          {item.items?.map((item) => (
            <ListItem key={item.url} disableGutters>
              <TableOfContentsItemButton item={item} />
            </ListItem>
          ))}
        </NestedList>
      </TableStack>
    </ListItem>
  );
};

export default React.memo(TableOfContentsItem);
