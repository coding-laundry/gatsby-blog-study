import styled from "@emotion/styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { GatsbyThumbnail } from "../../types/postTypes";

const ProfileStack = styled(Stack)`
  margin: 25px 0;
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
          gatsbyImageData(width: 100)
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
        <Link to="/about">
          <ProfileName variant="h6" color="info">
            @Caesiumy
          </ProfileName>
        </Link>
        <Typography variant="body1">This is Profile info body text</Typography>

        <Stack direction="row">
          <IconButton href="https://github.com/CaesiumY" aria-label="github">
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/chang-sik-yoon/"
            aria-label="linkedin"
            color="primary"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </ProfileStack>
  );
};

export default Profile;
