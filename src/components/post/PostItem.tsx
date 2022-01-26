import { Card, Typography, CardContent, styled, Box } from "@mui/material";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { PostNode } from "../../types/postTypes";
import TagList from "../tag/TagList";

const HoverCard = styled(Card)`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

const Title = styled(Typography)`
  font-weight: 600;
`;

const CardFlexContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const CardThumbnail = styled(GatsbyImage)`
  width: 200px;
  border-radius: 5px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

type PostItemProps = {
  post: PostNode;
};

const PostItem = ({ post }: PostItemProps) => {
  const { title, date, tags, category, thumbnail } = post.frontmatter;

  return (
    <Link to={`blog/${post.slug}`}>
      <HoverCard variant="outlined">
        <CardFlexContent>
          <Box>
            <Typography variant="subtitle1" color="primary">
              {category.toUpperCase()}
            </Typography>
            <Title variant="h5">{title}</Title>
            <Typography variant="caption">{date}</Typography>
            <Typography variant="body2" color="text.secondary">
              {post.excerpt}
            </Typography>
            <TagList tags={tags} />
          </Box>
          <CardThumbnail
            image={thumbnail.childImageSharp.gatsbyImageData}
            alt={`${title} thumbnail`}
          />
        </CardFlexContent>
      </HoverCard>
    </Link>
  );
};

export default PostItem;
