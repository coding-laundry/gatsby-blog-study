import { Stack } from "@mui/material";
import React from "react";
import { PostNode } from "../../types/postTypes";
import PostItem from "./PostItem";

type PostListProps = {
  posts: { node: PostNode }[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <Stack spacing={2}>
      {posts.map(({ node }) => (
        <PostItem key={node.id} post={node} />
      ))}
    </Stack>
  );
};

export default React.memo(PostList);
