import { useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { MODE_KEY } from "../../hooks/useCustomTheme";

const UtteranceComments = () => {
  const commentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const utteranceScript = document.createElement("script");
    const theme = localStorage.getItem(MODE_KEY) || "light";

    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "coding-laundry/gatsby-blog-study",
      "issue-term": "pathname",
      label: "💬",
      theme: `github-${theme}`,
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
  }, [localStorage.getItem(MODE_KEY)]);

  return <div ref={commentRef}></div>;
};

export default UtteranceComments;
