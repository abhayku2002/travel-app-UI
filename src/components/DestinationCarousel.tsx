
import React, { useState } from 'react';
import { Plane } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

interface DestinationCarouselProps {
  images: CarouselImage[];
  onImageSelect: (imageId: number) => void;
  activeId: number;
}

const DestinationCarousel: React.FC<DestinationCarouselProps> = ({ 
  images, 
  onImageSelect, 
  activeId 
}) => {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex space-x-3 px-4 min-w-full">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => onImageSelect(image.id)}
            className={cn(
              "carousel-item relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden w-20 h-20 transition-all duration-300",
              activeId === image.id ? "active" : ""
            )}
          >
            {image.id === 2 ? (
              <div className="bg-indigo-900 w-full h-full flex items-center justify-center">
                <Plane className="text-white" size={28} />
              </div>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationCarousel;
