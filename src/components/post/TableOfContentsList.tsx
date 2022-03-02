import styled from "@emotion/styled";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import { PostNode } from "../../types/postTypes";

const TableStack = styled(Stack)`
  width: 100%;
`;

const HeaderListItemText = styled(ListItemText)`
  span {
    font-size: 1rem;
  }
`;

const NestedList = styled(List)`
  border-left: 1px solid lightgray;
  margin-left: 1rem;
`;

const TableOfContentsList = ({
  tableOfContents,
}: Pick<PostNode, "tableOfContents">) => {
  const { items } = tableOfContents;
  return (
    <Box>
      <List dense>
        {items?.map((item) => (
          <ListItem key={item.url} disableGutters>
            <TableStack>
              <ListItemButton component="a" href={item.url}>
                <HeaderListItemText primary={item.title} />
              </ListItemButton>
              <NestedList disablePadding dense>
                {item.items?.map((item) => (
                  <ListItem key={item.url} disableGutters>
                    <ListItemButton component="a" href={item.url}>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </NestedList>
            </TableStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TableOfContentsList;
