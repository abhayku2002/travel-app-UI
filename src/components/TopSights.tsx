
import React from 'react';

interface Sight {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface TopSightsProps {
  sights: Sight[];
}

const TopSights: React.FC<TopSightsProps> = ({ sights }) => {
  return (
    <div className="mt-6 animate-fade-in">
      <h2 className="text-2xl font-light text-gray-500 mb-4">Top Sights</h2>
      <div className="space-y-4">
        {sights.map((sight) => (
          <div key={sight.id} className="flex items-center space-x-4 bg-white rounded-xl overflow-hidden shadow-sm">
            <img 
              src={sight.image} 
              alt={sight.name} 
              className="w-24 h-20 object-cover"
            />
            <div className="py-2">
              <h3 className="font-semibold text-travel-navy">{sight.name}</h3>
              <p className="text-xs text-gray-500">{sight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSights;
