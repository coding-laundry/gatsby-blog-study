import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PostNode } from "../../types/postTypes";
import PostItem from "./PostItem";
import PostPagination from "./PostPagination";

// TODO: gatsby-meta-config에서 받아오기
const POST_PER_PAGE = 2;

const PostStack = styled(Stack)`
  min-height: 50vh;
`;

interface PostListProps {
  posts: { node: PostNode }[];
}

const PostList = ({ posts }: PostListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isWindow = typeof window !== "undefined";

  useEffect(
    () => {
      const query = new URLSearchParams(window.location.search);
      const page = parseInt(query.get("page") || "1", 10);
      setCurrentPage(page);
    },
    isWindow ? [window.location.search] : []
  );

  return (
    <Stack spacing={2}>
      <PostStack spacing={2}>
        {posts &&
          posts
            ?.slice(
              POST_PER_PAGE * (currentPage - 1),
              POST_PER_PAGE * currentPage
            )
            .map(({ node }) => <PostItem key={node.id} post={node} />)}
      </PostStack>
      {posts && (
        <PostPagination
          postTotalLength={posts.length}
          currentPage={currentPage}
        />
      )}
    </Stack>
  );
};

export default PostList;
