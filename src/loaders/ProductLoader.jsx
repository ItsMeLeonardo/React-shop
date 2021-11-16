import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = (props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={316}
    viewBox="0 0 240 316"
    backgroundColor="#c7c7c7"
    foregroundColor="#d2d2d2"
    {...props}
  >
    <circle cx="295" cy="148" r="20" />
    <rect x="0" y="0" rx="16" ry="16" width="240" height="240" />
    <circle cx="207" cy="280" r="28" />
    <rect x="8" y="281" rx="5" ry="5" width="161" height="10" />
    <rect x="8" y="264" rx="5" ry="5" width="80" height="10" />
    <rect x="8" y="296" rx="5" ry="5" width="150" height="10" />
  </ContentLoader>
);

export default ProductLoader;
