import { Box } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import SearchInput from "./SearchInput";
import PostList from "../post/PostList";
import { navigate } from "gatsby";
import { AllMarkdown } from "../../types/postTypes";

interface SearchResultContainer {
  query: string;
  data: AllMarkdown;
}

const SearchResultContainer = ({ query, data }: SearchResultContainer) => {
  const [value, setValue] = useState(query ?? "");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    navigate(`?q=${value}`);
  };

  const posts = useMemo(
    () =>
      query &&
      data.allMdx.edges.filter(({ node }) => {
        const { slug, excerpt, frontmatter } = node;
        const { title, category, tags } = frontmatter;

        const isContain = (s: string) =>
          s.indexOf(decodeURIComponent(query)) !== -1;

        if (
          isContain(slug) ||
          isContain(excerpt) ||
          isContain(title) ||
          isContain(category) ||
          isContain(tags.join(""))
        ) {
          return true;
        }
      }),
    [query]
  );

  return (
    <Box>
      <SearchInput onChange={onChangeInput} value={value} />
      {posts && <PostList posts={posts} />}
    </Box>
  );
};

export default SearchResultContainer;
