import { List } from "@mui/material";
import React from "react";
import { PostNode } from "../../../types/postTypes";
import TableOfContentsItem from "./TableOfContentsItem";

const TableOfContentsList = ({
  tableOfContents,
}: Pick<PostNode, "tableOfContents">) => {
  const { items } = tableOfContents;

  return (
    <List disablePadding dense>
      {items?.map((item) => (
        <TableOfContentsItem key={item.url} item={item} />
      ))}
    </List>
  );
};

export default React.memo(TableOfContentsList);
