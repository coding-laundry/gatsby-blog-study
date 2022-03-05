import { List, styled } from "@mui/material";
import React from "react";
import { TableItem } from "../../../types/postTypes";
import TableOfContentsItem from "./TableOfContentsItem";

const NestedList = styled(List)`
  margin-left: 1rem;
`;
interface TableOfContentsListProps {
  items: TableItem[];
  nestedHead?: boolean;
}

const TableOfContentsList = ({
  items,
  nestedHead = true,
}: TableOfContentsListProps) => {
  console.log("items", items);

  return (
    <NestedList
      disablePadding
      dense
      sx={nestedHead && { borderLeft: "1px solid lightgray" }}
    >
      {items?.map((item) => (
        <TableOfContentsItem key={item.url} item={item} />
      ))}
    </NestedList>
  );
};

export default React.memo(TableOfContentsList);
