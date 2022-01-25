import { Chip } from "@mui/material";
import React from "react";

type TagItemProps = {
  name: string;
};

const TagItem = ({ name }: TagItemProps) => {
  return (
    <Chip
      label={name}
      variant="filled"
      size="small"
      onClick={() => console.log("name", name)}
    />
  );
};

export default TagItem;
