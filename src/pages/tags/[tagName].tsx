import React from "react";

const TagsDetailPage = (params) => {
  console.log("params :>> ", params);
  return <div>Tags page item {params.tagName}</div>;
};

export default TagsDetailPage;
