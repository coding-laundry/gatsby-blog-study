import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import TagItem from "./TagItem";

type TagList = {
  tags: string[];
};

const TagList = ({ tags }: TagList) => {
  return (
    <Stack direction="row" spacing={1} mt={2}>
      {tags.map((tag) => (
        <TagItem key={tag} name={tag} />
      ))}
    </Stack>
  );
};

export default TagList;
