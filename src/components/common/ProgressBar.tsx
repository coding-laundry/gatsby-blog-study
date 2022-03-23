import styled from "@emotion/styled";
import React from "react";
import { useScroll } from "../../hooks/useScroll";

interface ProgressBarProps {
  progress: number;
}

const StyledProgressBar = styled.div<ProgressBarProps>`
  position: fixed;
  top: 0;
  height: 5px;
  width: ${({ progress }) => (progress ? `${progress}%` : "0%")};
  background-color: #5352ed;
  z-index: 9999;
  transition: width 0.2s ease;
`;

const ProgressBar = () => {
  const { scrollProgress } = useScroll();

  return <StyledProgressBar progress={scrollProgress} />;
};

export default ProgressBar;
