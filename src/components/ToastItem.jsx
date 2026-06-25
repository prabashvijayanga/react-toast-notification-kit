import React, { useState } from 'react';
import { useToastDispatch } from '../context/ToastContext';

// Map toast types to Tailwind color classes
const typeStyles = {
  success: 'bg-green-500 border-green-700',
  error: 'bg-red-500 border-red-700',
  warning: 'bg-yellow-500 border-yellow-700 text-gray-900',
  info: 'bg-blue-500 border-blue-700',
};

const iconMap = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
};

export const ToastItem = ({ id, message, type }) => {
  const dispatch = useToastDispatch();
  const [isVisible, setIsVisible] = useState(true);

  // Handle removal with a smooth fade-out effect
  const handleRemove = () => {
    setIsVisible(false);
    setTimeout(() => {
      dispatch({ type: 'REMOVE_TOAST', payload: id });
    }, 300); // Wait for animation to finish
  };

  return (
    <div
      className={`${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      } transform transition-all duration-300 ease-in-out max-w-sm w-full mb-3 rounded-lg shadow-lg border-l-8 ${typeStyles[type]} text-white p-4 flex items-start justify-between`}
      role="alert"
    >
      <div className="flex items-center">
        <span className="text-xl mr-3">{iconMap[type]}</span>
        <span className="font-medium">{message}</span>
      </div>
      <button
        onClick={handleRemove}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none text-lg font-bold"
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};