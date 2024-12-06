// src/components/CategoryCard.jsx
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { isDraggingState } from '../state/atoms';

const CategoryCard = ({ categoryName, icon }) => {
  const setIsDragging = useSetRecoilState(isDraggingState);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', categoryName);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="category-card p-4 bg-white border border-gray-200 rounded-md shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 space-y-2"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      
      {/* <img src={icon} alt={`${categoryName} icon`} className="w-12 h-12 mb-2" /> */}
      <p className="text-center text-lg font-semibold text-gray-700">{categoryName}</p>
    </div>
  );
};

export default CategoryCard;
