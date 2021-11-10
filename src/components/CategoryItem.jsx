import React, { useEffect } from "react";

import "@styles/CategoryItem.scss";

export default function CategoryItem({ category, parentRef }) {
  const categories = parentRef.current?.childNodes;

  useEffect(() => {
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        categories.forEach((category) => {
          category.classList.remove("active");
        });
        category.classList.add("active");
      });
    });

    return () =>
      categories.forEach((category) =>
        category.removeEventListener("click", () => {})
      );
  }, []);

  const handleOnClick = () => {};

  return (
    <li
      role="button"
      className={category.isActiveByDefault ? "active" : ""}
      onClick={handleOnClick}
    >
      <p className="category-item">{category.name}</p>
    </li>
  );
}
