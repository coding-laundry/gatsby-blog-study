import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { PostFrontmatter } from "../../types/postTypes";
import Tags from "../tag/Tags";
import CategoryLink from "./CategoryLink";

const PostHeadBlock = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 16px 0;
`;

const CenteredPosition = styled.div`
  text-align: center;
`;

const Title = styled(Typography)`
  font-weight: bold;
`;

interface PostHeadProps {
  frontmatter: PostFrontmatter;
}

const PostHead = ({ frontmatter }: PostHeadProps) => {
  const { title, date, category, tags, thumbnail } = frontmatter;

  return (
    <PostHeadBlock>
      {thumbnail && (
        <CenteredPosition>
          <GatsbyImage
            image={thumbnail.childImageSharp.gatsbyImageData}
            alt={title}
          />
        </CenteredPosition>
      )}
      <CategoryLink name={category} />
      <Title variant="h4">{title}</Title>
      <Typography variant="caption">{date}</Typography>
      <Tags tags={tags} />
    </PostHeadBlock>
  );
};

export default PostHead;
