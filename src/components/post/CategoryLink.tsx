import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { navigate } from "gatsby";
import React from "react";

const Category = styled(Typography)`
  display: inline-block;
  padding: 3px 5px;
  margin-left: -5px;
  border-radius: 15px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

interface CategoryLinkProps {
  name: string;
}

const CategoryLink = ({ name }: CategoryLinkProps) => {
  const onClickCategory = () => {
    navigate(`/category/${name.toLowerCase()}`);
  };

  return (
    <Category
      className="category"
      variant="subtitle1"
      color="primary"
      onClick={onClickCategory}
    >
      {name.toUpperCase()}
    </Category>
  );
};

export default CategoryLink;
