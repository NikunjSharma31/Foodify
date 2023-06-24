import React, { useState } from "react";
import { categories } from "../data/data";

const Categories = () => {
  // console.log(categories);
  const [category, setCategory] = useState(categories);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center" key={index}>
            <h2 className="font-bold sm:text-2xl">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
