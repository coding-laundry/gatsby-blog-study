import { Chip } from "@mui/material";
import { navigate } from "gatsby";
import React from "react";

type TagItemProps = {
  name: string;
};

const TagItem = ({ name }: TagItemProps) => {
  const onClickTagItem = () => {
    navigate(`/tags/${name}`);
  };

  return (
    <Chip label={name} variant="filled" size="small" onClick={onClickTagItem} />
  );
};

export default TagItem;
