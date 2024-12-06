// src/components/CategorySection.jsx
import React from 'react';
import CategoryCard from './CategoryCard';
import {FireIcon} from "@heroicons/react/24/outline"

const CategorySection = () => {
  const categories = [
    { title: 'Bestsellers', icon: <FireIcon /> },
    { title: 'Mobiles', icon: '/path/to/mobiles-icon.png' },
    { title: 'Electronics', icon: '/path/to/electronics-icon.png' },
    { title: 'Home & Kitchen', icon: '/path/to/home-kitchen-icon.png' },
    { title: 'More Categories', icon: '/path/to/more-categories-icon.png' },
  ];

  return (
    <div className="category-section flex justify-around mt-8 space-x-4">
      {categories.map((category, index) => (
        <div key={index} className="flex-1 max-w-[120px] "> {/* Setting a fixed width for consistency */}
          <CategoryCard categoryName={category.title} icon={category.icon} />
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
