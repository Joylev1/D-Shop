import React from 'react';

const CategoryComponent = ({ title, icon }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", title); // Set the data to be transferred
    e.target.classList.add("opacity-50"); // Optional: style while dragging
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove("opacity-50"); // Reset styling
  };

  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="w-24 h-24 flex flex-col items-center justify-center p-4 bg-white rounded shadow hover:shadow-lg cursor-pointer transition-opacity"
    >
      <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
      <p className="text-center mt-2">{title}</p>
    </div>
  );
};

export default CategoryComponent;
