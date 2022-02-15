import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchInput from "./SearchInput";

const SearchResultContainer = () => {
  const [value, setValue] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Box>
      <SearchInput onChange={onChangeInput} value={value} />
    </Box>
  );
};

export default SearchResultContainer;
