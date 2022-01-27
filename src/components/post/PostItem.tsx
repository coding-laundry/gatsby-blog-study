import { Card, Typography, CardContent, styled, Box } from "@mui/material";
import { navigate } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { PostNode } from "../../types/postTypes";
import TagList from "../tag/TagList";

const HoverCard = styled(Card)`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.12);
  }
`;

const Category = styled(Typography)`
  display: inline-block;
  padding: 3px 5px;
  margin-left: -5px;
  border-radius: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const Title = styled(Typography)`
  font-weight: 600;
`;

const CardFlexContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const CardThumbnail = styled(GatsbyImage)`
  width: 200px;
  border-radius: 5px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

type PostItemProps = {
  post: PostNode;
};

const PostItem = ({ post }: PostItemProps) => {
  const { title, date, tags, category, thumbnail } = post.frontmatter;

  const onClickCategory = (e: React.MouseEvent<HTMLElement>) => {
    const { textContent } = e.target as HTMLElement;
    navigate(`/category/${textContent.toLowerCase()}`);
  };

  const onClickLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { classList } = e.target as HTMLElement;
    if (classList.contains("category") || classList.contains("MuiChip-label")) {
      e.preventDefault();
    }
  };

  return (
    <Link to={`blog/${post.slug}`} onClick={onClickLink}>
      <HoverCard variant="outlined">
        <CardFlexContent>
          <Box>
            <Category
              className="category"
              variant="subtitle1"
              color="primary"
              onClick={onClickCategory}
            >
              {category.toUpperCase()}
            </Category>
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
