import React, { useEffect, useRef } from "react";

const UtteranceComments = () => {
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utteranceScript = document.createElement("script");

    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "coding-laundry/gatsby-blog-study",
      "issue-term": "pathname",
      label: "💬",
      theme: "github-light",
      crossorigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utteranceScript.setAttribute(key, value);
    });

    commentRef.current.appendChild(utteranceScript);
  }, []);

  return <div ref={commentRef}></div>;
};

export default UtteranceComments;
