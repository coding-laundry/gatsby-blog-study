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

type ProfileDataQuery = {
  file: {
    name: string;
  } & GatsbyThumbnail;
  site: {
    siteMetadata: {
      description: string;
      author: string;
      social: {
        github: string;
        linkedIn: string;
      };
    };
  };
};

const Profile = () => {
  const { file, site } = useStaticQuery<ProfileDataQuery>(graphql`
    query {
      file(name: { eq: "icon" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 100)
        }
      }
      site {
        siteMetadata {
          description
          author
          social {
            github
            linkedIn
          }
        }
      }
    }
  `);

  const { author, description, social } = site.siteMetadata;

  return (
    <ProfileStack spacing={3} direction="row">
      <GatsbyImage image={file.childImageSharp.gatsbyImageData} alt="Profile" />
      <Box>
        <Link to="/about">
          <ProfileName variant="h6" color="info">
            @{author}
          </ProfileName>
        </Link>
        <Typography variant="body1">{description}</Typography>

        <Stack direction="row">
          {social.github && (
            <IconButton
              href={`https://github.com/${social.github}`}
              aria-label="github"
            >
              <GitHubIcon />
            </IconButton>
          )}
          {social.linkedIn && (
            <IconButton
              href={social.linkedIn}
              aria-label="linkedin"
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>
          )}
        </Stack>
      </Box>
    </ProfileStack>
  );
};

export default Profile;
