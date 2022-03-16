import styled from "@emotion/styled";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "gatsby";
import React, { useMemo } from "react";

// TODO: gatsby-meta-config에서 받아오기
const POST_PER_PAGE = 2;

const CenteredPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
`;

interface PostPaginationProps {
  postTotalLength: number;
  currentPage: number;
}

const PostPagination = ({
  postTotalLength,
  currentPage,
}: PostPaginationProps) => {
  const totalPageCount = useMemo(
    () => Math.ceil(postTotalLength / POST_PER_PAGE),
    [postTotalLength]
  );

  return (
    <CenteredPagination
      count={totalPageCount}
      page={currentPage}
      color="primary"
      renderItem={(item) => (
        <PaginationItem component={Link} to={`?page=${item.page}`} {...item} />
      )}
    />
  );
};

export default PostPagination;
