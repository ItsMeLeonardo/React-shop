import React from "react";
import ContentLoader from "react-content-loader";

const SaleItemLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#c4c4c4"
    foregroundColor="#d2d2d2"
    {...props}
  >
    <rect x="20" y="20" rx="2" ry="2" width="200" height="20" />
    <rect x="20" y="92" rx="4" ry="4" width="138" height="15" />
    <rect x="20" y="120" rx="4" ry="4" width="100" height="10" />
    <rect x="185" y="105" rx="4" ry="4" width="70" height="15" />
    <circle cx="270" cy="113" r="10" />
    <rect x="20" y="158" rx="4" ry="4" width="138" height="15" />
    <rect x="20" y="186" rx="4" ry="4" width="100" height="10" />
    <rect x="184" y="172" rx="4" ry="4" width="70" height="15" />
    <circle cx="270" cy="180" r="10" />
    <rect x="20" y="226" rx="4" ry="4" width="138" height="15" />
    <rect x="20" y="254" rx="4" ry="4" width="100" height="10" />
    <rect x="186" y="238" rx="4" ry="4" width="70" height="15" />
    <circle cx="270" cy="245" r="10" />
  </ContentLoader>
);

export default SaleItemLoader;
