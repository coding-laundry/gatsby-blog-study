import React from "react";
import { PostNode } from "../../types/postTypes";
import PostItem from "./PostItem";

type PostListProps = {
  posts: { node: PostNode }[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <section>
      {posts.map(({ node }) => (
        <PostItem key={node.id} post={node} />
      ))}
    </section>
  );
};

export default PostList;
