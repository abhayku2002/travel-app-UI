
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import FavoriteButton from './FavoriteButton';
import OnSaleTag from './OnSaleTag';
import DestinationCarousel from './DestinationCarousel';

interface TravelCardProps {
  destination: {
    name: string;
    location: string;
    country: string;
    description: string;
    mainImage: string;
    images: Array<{
      id: number;
      src: string;
      alt: string;
    }>;
    onSale?: boolean;
  };
}

const TravelCard: React.FC<TravelCardProps> = ({ destination }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeImageId, setActiveImageId] = useState(1);

  return (
    <div className="relative w-full bg-white rounded-t-3xl overflow-hidden animate-scale-in">
      {/* Hero Image */}
      <div className="relative w-full h-[70vh]">
        <img 
          src={destination.mainImage} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        
        {/* Back button */}
        <button 
          className="absolute top-4 left-4 z-10 bg-black/20 backdrop-blur-sm rounded-full p-2"
          onClick={() => console.log('Back button clicked')}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
        
        {/* Favorite button */}
        <FavoriteButton />
        
        {/* Sale tag */}
        {destination.onSale && <OnSaleTag />}
        
        {/* Title gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 hero-gradient pt-20 pb-8 px-5">
          <h1 className="text-4xl font-bold text-white mb-2">{destination.name}</h1>
          <div className="flex items-center text-white/90">
            <MapPin size={16} className="mr-1" />
            <span>{destination.location}, {destination.country}</span>
          </div>
        </div>
      </div>
      
      {/* Bottom card content */}
      <div className="bg-white rounded-t-3xl -mt-5 relative">
        {/* Image carousel */}
        <DestinationCarousel 
          images={destination.images} 
          onImageSelect={setActiveImageId}
          activeId={activeImageId}
        />
        
        {/* Description */}
        <div className="px-5 py-4">
          <p className="text-gray-600 leading-relaxed mb-2">
            {expanded 
              ? destination.description 
              : `${destination.description.substring(0, 120)}...`
            }
          </p>
          <button 
            className="text-travel-green font-medium"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "READ LESS" : "READ MORE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
