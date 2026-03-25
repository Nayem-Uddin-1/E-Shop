import React from "react";

function BrandList({ prods = [], selectedBrands = [], setSelectedBrands }) {

  // ✅ Get unique brands safely
  const uniqueBrands = [...new Set(prods.map((p) => p.brand))];

  // ✅ Toggle brand
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((b) => b !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div>
      <h2 className="font-semibold mb-4 px-5 mt-5">Brand</h2>

      <div className="space-y-3 text-sm px-5">
        {uniqueBrands.map((brand, i) => (
          <div key={i} className="flex items-center py-2">
            <input
              type="checkbox"
              className="mr-2 cursor-pointer"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <h3 className="cursor-pointer">{brand}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandList;