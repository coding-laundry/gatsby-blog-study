import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import PostList from "../post/PostList";
import { navigate } from "gatsby";

const SearchResultContainer = () => {
  const [value, setValue] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    navigate(`?q=${value}`);
  };

  return (
    <Box>
      <SearchInput onChange={onChangeInput} value={value} />
      <PostList posts={[]} />
    </Box>
  );
};

export default SearchResultContainer;
