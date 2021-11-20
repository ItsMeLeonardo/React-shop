import React from "react";
import ContentLoader from "react-content-loader";

const CategoryLoader = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={40}
    viewBox="0 0 500 40"
    backgroundColor="#c4c4c4"
    foregroundColor="#d2d2d2"
    {...props}
  >
    <rect x="10" y="10" rx="2" ry="2" width="60" height="20" />
    <rect x="90" y="10" rx="2" ry="2" width="60" height="20" />
    <rect x="170" y="10" rx="2" ry="2" width="60" height="20" />
    <rect x="250" y="10" rx="2" ry="2" width="60" height="20" />
    <rect x="330" y="10" rx="2" ry="2" width="60" height="20" />
    <rect x="410" y="10" rx="2" ry="2" width="60" height="20" />
  </ContentLoader>
);

export default CategoryLoader;
