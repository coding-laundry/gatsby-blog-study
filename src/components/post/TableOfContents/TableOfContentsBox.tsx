import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useMemo } from "react";
import TableOfContentsList from "./TableOfContentsList";
import { TableItem } from "../../../types/postTypes";
import { getIds } from "../../../utils/getIds";
import { useActiveHead } from "../../../hooks/useActiveHead";

const HiddenBox = styled(Box)`
  margin-left: -1rem;
  @media (max-width: 600px) {
    display: none;
  }
`;

interface TableOfContentsBoxProps {
  items: TableItem[];
}

const TableOfContentsBox = ({ items }: TableOfContentsBoxProps) => {
  const allIds = useMemo(() => getIds(items), [items]);
  const { active } = useActiveHead(allIds);

  return (
    <HiddenBox>
      <TableOfContentsList
        items={items}
        nestedHead={false}
        selectedId={active}
      />
    </HiddenBox>
  );
};

export default TableOfContentsBox;
