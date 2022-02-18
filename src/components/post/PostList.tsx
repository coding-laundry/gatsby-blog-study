import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import React from "react";
import { PostNode } from "../../types/postTypes";
import PostItem from "./PostItem";

const PostStack = styled(Stack)`
  min-height: 50vh;
`;

type PostListProps = {
  posts: { node: PostNode }[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <PostStack spacing={2}>
      {posts &&
        posts?.map(({ node }) => <PostItem key={node.id} post={node} />)}
    </PostStack>
  );
};

export default React.memo(PostList);
