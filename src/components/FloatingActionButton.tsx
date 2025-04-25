
import React from 'react';
import { Plane } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300 gap-2 animate-float focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      onClick={onClick}
      aria-label="Search flights"
    >
      <Plane className="transform -rotate-45" size={20} />
      <span className="font-semibold">SEARCH FLIGHTS</span>
      <div className="bg-travel-green text-xs font-bold py-1 px-2 rounded-full">ON SALE</div>
    </button>
  );
};

export default FloatingActionButton;
