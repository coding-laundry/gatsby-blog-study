import styled from "@emotion/styled";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "gatsby";
import React, { useMemo } from "react";

const CenteredPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
`;

interface PostPaginationProps {
  postLimit: number;
  postTotalLength: number;
  currentPage: number;
}

const PostPagination = ({
  postLimit,
  postTotalLength,
  currentPage,
}: PostPaginationProps) => {
  const totalPageCount = useMemo(
    () => Math.ceil(postTotalLength / postLimit),
    [postTotalLength]
  );

  return (
    <CenteredPagination
      count={totalPageCount}
      page={currentPage}
      color="secondary"
      renderItem={(item) => (
        <PaginationItem component={Link} to={`?page=${item.page}`} {...item} />
      )}
    />
  );
};

export default PostPagination;
