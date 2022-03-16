import "./src/styles/global.scss";
import React from "react";
import ThemeLayout from "./src/components/layout/ThemeLayout.tsx";

export const wrapRootElement = ({ element }) => (
  <ThemeLayout>{element}</ThemeLayout>
);

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="hello"
      dangerouslySetInnerHTML={{
        __html: `(function () {
          document.body.classList.add('hello')
        })();`,
      }}
    />,
  ]);
};
