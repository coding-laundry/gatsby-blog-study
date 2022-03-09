import { useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { MODE_KEY } from "../../hooks/useCustomTheme";
import { useObserver } from "../../hooks/useObserver";

const UtteranceComments = () => {
  const commentRef = useRef<HTMLDivElement>(null);
  const { active, setElement } = useObserver(commentRef.current);
  const theme = useTheme();
  const { mode } = theme.palette;

  useEffect(() => {
    setElement(commentRef.current);
    if (!active) return;

    const utteranceScript = document.createElement("script");
    const userTheme = localStorage.getItem(MODE_KEY) || "light";

    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "coding-laundry/gatsby-blog-study",
      "issue-term": "pathname",
      label: "💬",
      theme: `github-${userTheme}`,
      crossorigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utteranceScript.setAttribute(key, value);
    });

    commentRef.current.appendChild(utteranceScript);

    return () => {
      const comment = document.querySelector("div.utterances");
      comment && comment.remove();
    };
  }, [mode, active]);

  return <div ref={commentRef}></div>;
};

export default UtteranceComments;
