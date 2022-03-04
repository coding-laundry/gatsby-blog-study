import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { List } from "@mui/material";
import React from "react";
import { TableItem } from "../../../types/postTypes";
import TableOfContentsItem from "./TableOfContentsItem";

const NestedList = styled(List)`
  margin-left: 1rem;
  ${(props: { nestedHead?: boolean }) =>
    props.nestedHead &&
    css`
      border-left: 1px solid lightgray;
    `}
`;

interface TableOfContentsListProps {
  items: TableItem[];
  nestedHead?: boolean;
}

const TableOfContentsList = ({
  items,
  nestedHead = true,
}: TableOfContentsListProps) => {
  return (
    <NestedList disablePadding dense nestedHead={nestedHead}>
      {items?.map((item) => (
        <TableOfContentsItem key={item.url} item={item} />
      ))}
    </NestedList>
  );
};

export default React.memo(TableOfContentsList);
