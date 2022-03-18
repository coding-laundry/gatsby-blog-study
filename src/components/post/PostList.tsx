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
  postLimit?: number;
}

const PostList = ({ posts, postLimit = POST_PER_PAGE }: PostListProps) => {
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
            ?.slice(postLimit * (currentPage - 1), postLimit * currentPage)
            .map(({ node }) => <PostItem key={node.id} post={node} />)}
      </PostStack>
      {posts && (
        <PostPagination
          postLimit={postLimit}
          postTotalLength={posts.length}
          currentPage={currentPage}
        />
      )}
    </Stack>
  );
};

export default PostList;
