import { useEffect, useState } from "react";

const API_URL = "https://fakestoreapi.com/products/categories";

const addGenericCategory = (categories) => {
  return ["all", ...categories];
};

const transformToObject = (categories) => {
  return categories.map((category) => {
    if (category === "all") {
      return { name: category, isActiveByDefault: true };
    }
    return { name: category };
  });
};

export default function useGetCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (categories.length === 0) {
      setLoading(true);
      fetch(API_URL)
        .then((res) => res.json())
        .then((json) => {
          const withGenericCategory = addGenericCategory(json);
          const categoryObject = transformToObject(withGenericCategory);
          setCategories(categoryObject);
          setLoading(false);
        });
    }
  }, []);

  return { categories, loading };
}
