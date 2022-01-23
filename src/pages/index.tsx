import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Title = styled.h2`
  font-size: 2rem;
`;

const IndexPage = () => {
  return (
    <>
      <Title>pretendard 프리텐다드</Title>
      <p>p태그</p>
      <h1>h1 태그</h1>
      <Button variant="contained">Hello World</Button>
    </>
  );
};

export default IndexPage;
