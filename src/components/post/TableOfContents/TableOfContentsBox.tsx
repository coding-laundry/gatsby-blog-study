import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useMemo } from "react";
import TableOfContentsList from "./TableOfContentsList";
import { TableItem } from "../../../types/postTypes";
import { getIds } from "../../../utils/getIds";

const HiddenBox = styled(Box)`
  @media (max-width: 600px) {
    display: none;
  }
`;

interface TableOfContentsBoxProps {
  items: TableItem[];
}

const TableOfContentsBox = ({ items }: TableOfContentsBoxProps) => {
  const allIds = useMemo(() => getIds(items), [items]);

  console.log("allIds :>> ", allIds);

  return (
    <HiddenBox>
      <TableOfContentsList items={items} nestedHead={false} />
    </HiddenBox>
  );
};

export default TableOfContentsBox;
