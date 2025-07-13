import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
  const { data } = useLoaderData();
  console.log(data);
  return <div>{data.length} New Found in this category</div>;
};

export default CategoryNews;
