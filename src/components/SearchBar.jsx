import React from 'react';
import { useRecoilValue } from 'recoil';
import { rightItemsState } from '../state/atoms';

const SearchBar = () => {
  const rightItems = useRecoilValue(rightItemsState);

  const handleSearch = () => {
    const query = rightItems.join('+');
    console.log(query)
    window.location.href = `https://www.amazon.in/`;
  };

  return (
    <div className="flex w-full max-w-3xl mx-auto my-px p-3 rounded-lg shadow-md bg-white border border-gray-200 hover:shadow-xl cursor-pointer transition-transform duration-200 hover:scale-105">
      <input
        type="text"
        className="flex-grow p-1 text-gray-800 placeholder-gray-500 focus:outline-none"
        placeholder="Search for products..."
        
      />
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none  hover:shadow-xl cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
