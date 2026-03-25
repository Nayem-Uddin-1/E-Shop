import React from "react";

function PriceRange({ priceRange, setPriceRange }) {

  const handleMinChange = (e) => {
    const value = Number(e.target.value);

    // prevent negative
    if (value < 0) return;

    // auto fix max if needed
    setPriceRange([value, Math.max(value, priceRange[1])]);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);

    // prevent negative
    if (value < 0) return;

    // auto fix min if needed
    setPriceRange([Math.min(value, priceRange[0]), value]);
  };

  return (
    <div className="mt-6 px-5">
      <h2 className="font-semibold mb-4">Price Range</h2>

      <div className="flex gap-2">

        <input
          type="number"
          value={priceRange[0]}
          onChange={handleMinChange}
          placeholder="Min"
          className="border p-2 w-1/2"
        />

        <input
          type="number"
          value={priceRange[1]}
          onChange={handleMaxChange}
          placeholder="Max"
          className="border p-2 w-1/2"
        />

      </div>

      <p className="text-sm text-gray-500 mt-2">
        ${priceRange[0]} - ${priceRange[1]}
      </p>
    </div>
  );
}

export default PriceRange;