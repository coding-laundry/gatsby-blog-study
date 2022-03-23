import { Card, Typography, CardContent, styled, Box } from "@mui/material";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { PostNode } from "../../types/postTypes";
import Tags from "../tag/Tags";
import CategoryLink from "../category/CategoryLink";

const HoverCard = styled(Card)`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 6px 6px 0 0 rgba(83, 82, 237, 0.4);
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
  transition: transform 0.2s ease-in-out;

  .MuiPaper-root:hover & {
    transform: scale(1.02);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

interface PostItemProps {
  post: PostNode;
}

const PostItem = ({ post }: PostItemProps) => {
  const { title, date, tags, category, thumbnail } = post.frontmatter;

  const onClickLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { classList } = e.target as HTMLElement;
    if (classList.contains("category") || classList.contains("MuiChip-label")) {
      e.preventDefault();
    }
  };

  return (
    <Link to={`/blog/${post.slug}`} onClick={onClickLink}>
      <HoverCard variant="outlined">
        <CardFlexContent>
          <Box>
            <CategoryLink name={category} />
            <Title variant="h5">{title}</Title>
            <Typography variant="caption">{date}</Typography>
            <Typography variant="body2" color="text.secondary">
              {post.excerpt}
            </Typography>
            <Tags tags={tags} />
          </Box>
          {thumbnail && (
            <CardThumbnail
              image={thumbnail.childImageSharp.gatsbyImageData}
              alt={`${title} thumbnail`}
            />
          )}
        </CardFlexContent>
      </HoverCard>
    </Link>
  );
};

export default PostItem;
