import { Stack } from "@mui/material";
import React from "react";
import TagItem from "./TagItem";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <Stack direction="row" spacing={1} mt={2}>
      {tags.map((tag) => (
        <TagItem key={tag} name={tag} />
      ))}
    </Stack>
  );
};

export default Tags;
