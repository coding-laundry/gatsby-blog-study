import "./src/styles/global.scss";
import React from "react";
import RootProvider from "./src/components/layout/RootProvider.tsx";

export const wrapRootElement = ({ element }) => (
  <RootProvider>{element}</RootProvider>
);

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="hello"
      dangerouslySetInnerHTML={{
        __html: `(function () {          
        })();`,
      }}
    />,
  ]);
};
