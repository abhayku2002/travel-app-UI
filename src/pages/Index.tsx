
import React, { useState } from 'react';
import TravelCard from '@/components/TravelCard';
import TopSights from '@/components/TopSights';
import FloatingActionButton from '@/components/FloatingActionButton';
import { toast } from '@/components/ui/use-toast';

// Sample data
const eiffelTower = {
  name: "Eiffel Tower",
  location: "Paris",
  country: "France",
  description: "Paris' monument-lined boulevards, museums, classical bistros and boutiques are enhanced by a new wave of multimedia galleries, creative wine bars, design shops and tech start-ups. The cloud-piercing, wrought-iron Eiffel Tower, built for the 1889 World's Fair, is a cultural icon and one of the world's most recognizable structures.",
  mainImage: `https://images.unsplash.com/photo-${process.env.NODE_ENV === 'production' ? '1483038712412-4245e9b90334' : '1483038712412-4245e9b90334'}`,
  images: [
    {
      id: 1,
      src: "/lovable-uploads/9ef2b54c-1840-427d-a3e4-4439b1d32f5a.png",
      alt: "Eiffel Tower during day",
    },
    {
      id: 2, // This will be our flight search icon
      src: "",
      alt: "Search Flights",
    },
    {
      id: 3,
      src: "/lovable-uploads/34850b85-7332-464a-8ad6-1fe83b333a89.png",
      alt: "Eiffel Tower at night",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Paris landscape",
    },
  ],
  onSale: true,
};

const topSights = [
  {
    id: 1,
    name: "Musée du Louvre",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    description: "Top choice museum in Louvre & Les Halles",
  },
  {
    id: 2,
    name: "Notre-Dame Cathedral",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    description: "Historic cathedral in Île de la Cité",
  },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchFlights = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Flight Search",
        description: "Finding the best prices for your trip to Paris",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-travel-light-gray">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Main travel card */}
        <TravelCard destination={eiffelTower} />
        
        {/* Content area */}
        <div className="px-5 py-4">
          {/* Top sights */}
          <TopSights sights={topSights} />
          
          {/* Space for FAB */}
          <div className="h-24"></div>
        </div>
        
        {/* Fixed search flights button */}
        <div className="fixed bottom-8 left-0 right-0 flex justify-center max-w-md mx-auto px-4">
          <FloatingActionButton 
            onClick={handleSearchFlights} 
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
