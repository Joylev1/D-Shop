import React from 'react';
import { useSetRecoilState } from 'recoil';
import { leftItemsState, rightItemsState } from '../state/atoms';
import { isDraggingState } from '../state/atoms'; // Import the new drag state
import { useRecoilValue } from 'recoil';

const DropZone = ({ position }) => {
  const setLeftItems = useSetRecoilState(leftItemsState);
  const setRightItems = useSetRecoilState(rightItemsState);
  const isDragging = useRecoilValue(isDraggingState); // Get current drag state

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    const itemTitle = e.dataTransfer.getData('text/plain');
    e.preventDefault();

    if (position === 'left') {
      setLeftItems((prevItems) => {
        const updatedItems = [...prevItems, itemTitle];
        console.log('Left Drop Zone Updated:', updatedItems);
        return updatedItems;

      })
    } else if (position === 'right') {
      setRightItems((prevItems) => {
        const updatedItems = [...prevItems, itemTitle];
        console.log('Right Drop Zone Updated:', updatedItems);
        return updatedItems;
      })
      
    }
  };

  const positionStyles =
    position === 'left'
      ? 'left-0 bg-red-100 text-red-500'
      : 'right-0 bg-blue-100 text-blue-500';

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`fixed top-0 ${positionStyles} h-full w-1/12 flex items-center justify-center transition-opacity duration-300 ${
        !isDragging ? 'opacity-0 pointer-events-none' : 'opacity-75 pointer-events-auto'
      }`}
    >
      <p className="font-bold">{position === 'left' ? 'Left Drop Zone' : 'Right Drop Zone'}</p>
    </div>
  );
};

export default DropZone;
