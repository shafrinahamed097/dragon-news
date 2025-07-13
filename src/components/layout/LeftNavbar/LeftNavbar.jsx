import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-semibold mb-4">All Cateogory</h2>
      <div className="flex flex-col gap-2">
        {
            categories.map(category => <button className="btn rounded-xl" key={category.category_id}><Link>{category.category_name}</Link></button>)
        }
      </div>
    </div>
  );
};

export default LeftNavbar;
