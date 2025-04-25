
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const FavoriteButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className={cn(
        "absolute top-4 right-4 z-10 rounded-full bg-black/20 backdrop-blur-sm p-2 transition-all duration-300",
        isFavorite ? "animate-pulse-light" : ""
      )}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart 
        className={cn(
          "transition-all duration-300 transform", 
          isFavorite ? "text-red-500 fill-red-500 scale-110" : "text-white"
        )} 
        size={24} 
      />
    </button>
  );
};

export default FavoriteButton;
