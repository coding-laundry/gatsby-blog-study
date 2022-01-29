import styled from "@emotion/styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { GatsbyThumbnail } from "../../types/postTypes";

const ProfileStack = styled(Stack)`
  margin-top: 15px;
  padding: 15px;
`;

const ProfileName = styled(Typography)`
  background-color: #ecf0f2;
  display: inline-block;
  font-weight: 600;
  padding: 2px 6px;
  margin-bottom: 5px;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

type ProfileImageQuery = {
  file: {
    name: string;
  } & GatsbyThumbnail;
};

const Profile = () => {
  const data = useStaticQuery<ProfileImageQuery>(graphql`
    query {
      file(name: { eq: "icon" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 120)
        }
      }
    }
  `);

  return (
    <ProfileStack spacing={3} direction="row">
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="Profile"
      />
      <Box>
        <ProfileName variant="h6" color="info">
          @Caesiumy
        </ProfileName>
        <Typography variant="body1">This is Profile info body text</Typography>

        <Stack direction="row">
          <IconButton aria-label="github" color="secondary">
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="linkedin" color="primary">
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </ProfileStack>
  );
};

export default Profile;
