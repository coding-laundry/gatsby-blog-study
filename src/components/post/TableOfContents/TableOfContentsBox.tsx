import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import TableOfContentsList from "./TableOfContentsList";
import { TableItem } from "../../../types/postTypes";

const HiddenBox = styled(Box)`
  @media (max-width: 600px) {
    display: none;
  }
`;

interface TableOfContentsBoxProps {
  items: TableItem[];
}

const TableOfContentsBox = ({ items }: TableOfContentsBoxProps) => {
  console.log("items", items);

  return (
    <HiddenBox>
      <TableOfContentsList items={items} nestedHead={false} />
    </HiddenBox>
  );
};

export default TableOfContentsBox;
