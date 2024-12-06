// src/state/atoms.js
import { atom } from 'recoil';

export const leftItemsState = atom({
    key: 'leftItemsState',
    default: [],
});

export const rightItemsState = atom({
    key: 'rightItemsState',
    default: [],
});


export const isDraggingState = atom({
    key: 'isDraggingState',
    default: false, // Initially, no component is being dragged
});