// src/components/PriceRange.jsx
import React, { useState, useRef, useEffect } from "react";

export default function PriceRange() {
  const minLimit = 0;
  const maxLimit = 2000;

  const [minPrice, setMinPrice] = useState(200);
  const [maxPrice, setMaxPrice] = useState(670);

  const minRef = useRef(null);
  const maxRef = useRef(null);

  
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

   
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Price Range</h2>

      <div className="relative h-6 mb-4">
        {/* Track */}
        <div className="absolute w-full h-2 bg-gray-300 rounded-lg top-2"></div>

        {/* Selected range */}
        <div
          className="absolute h-2 bg-yellow-400 rounded-lg top-2"
          style={{
            left: `${(minPrice / maxLimit) * 100}%`,
            width: `${((maxPrice - minPrice) / maxLimit) * 100}%`,
          }}
        ></div>

        {/* Min Slider */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minPrice}
          ref={minRef}
          onChange={handleMinChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: 2 }}
        />

        {/* Max Slider */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxPrice}
          ref={maxRef}
          onChange={handleMaxChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: 3 }}
        />
      </div>

      {/* Display selected price */}
      <div className="text-gray-700 font-medium">
        Price: ${minPrice} - ${maxPrice}
      </div>
    </div>
  );
}
