import {
  Card,
  Typography,
  CardContent,
  styled,
  CardActionArea,
  CardActions,
} from "@mui/material";
import React from "react";
import { PostNode } from "../../types/postTypes";
import TagItem from "../tag/TagItem";
import TagList from "../tag/TagList";

const Title = styled(Typography)`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

type PostItemProps = {
  post: PostNode;
};

const PostItem = ({ post }: PostItemProps) => {
  const { title, date, tags, category, thumbnail } = post.frontmatter;

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" color="primary">
          {category.toUpperCase()}
        </Typography>
        <Title variant="h5">{title}</Title>
        <Typography variant="body2" color="text.secondary">
          {post.excerpt}
        </Typography>
        <TagList tags={tags} />
      </CardContent>
    </Card>
  );
};

export default PostItem;
