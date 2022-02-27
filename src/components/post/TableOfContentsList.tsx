import React from "react";
import { PostNode } from "../../types/postTypes";

const TableOfContentsList = ({
  tableOfContents,
}: Pick<PostNode, "tableOfContents">) => {
  console.log("tableOfContents", tableOfContents);
  return <div>TableOfContentsList</div>;
};

export default TableOfContentsList;
