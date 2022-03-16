import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { PostNode } from "../../types/postTypes";
import PostItem from "./PostItem";
import PostPagination from "./PostPagination";

const POST_PER_PAGE = 2;

const PostStack = styled(Stack)`
  min-height: 50vh;
`;

interface PostListProps {
  posts: { node: PostNode }[];
}

const PostList = ({ posts }: PostListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const qs = window.location.search;
    const query = new URLSearchParams(qs);
    const page = parseInt(query.get("page") || "1", 10);
    setCurrentPage(page);
  }, []);

  const onChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    navigate(`?page=${value}`);
  };

  return (
    <Stack spacing={2}>
      <PostStack spacing={2}>
        {posts &&
          posts
            ?.slice(1 - currentPage, POST_PER_PAGE * currentPage)
            .map(({ node }) => <PostItem key={node.id} post={node} />)}
      </PostStack>
      {posts && (
        <PostPagination
          postTotalLength={posts.length}
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      )}
    </Stack>
  );
};

export default React.memo(PostList);
