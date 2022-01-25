import React from "react";
import { PostNode } from "../../types/postTypes";

type PostListProps = {
  posts: { node: PostNode }[];
};

const PostList = ({ posts }: PostListProps) => {
  console.log("posts", posts);
  return <>postList</>;
};

export default PostList;
