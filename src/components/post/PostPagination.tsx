import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import React, { useMemo } from "react";

const POST_PER_PAGE = 2;

const CenteredPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
`;

interface PostPaginationProps {
  postTotalLength: number;
  currentPage: number;
  onChangePage: (e: React.ChangeEvent<unknown>, value: number) => void;
}

const PostPagination = ({
  postTotalLength,
  currentPage,
  onChangePage,
}: PostPaginationProps) => {
  const totalPageCount = useMemo(
    () => Math.floor(postTotalLength / POST_PER_PAGE) + 1,
    [postTotalLength]
  );

  return (
    <CenteredPagination
      count={totalPageCount}
      page={currentPage}
      color="primary"
      onChange={onChangePage}
    />
  );
};

export default PostPagination;
