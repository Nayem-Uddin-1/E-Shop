import React, { useState } from "react";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import PriceRange from "./PriceRange";
import BrandList from "./BrandList";
import Breadcrumbs from "./Breadcrumbs";
import Container from "../../components/common/container/Container";

export default function Shop() {

  const prods = useSelector((state) => state.product.products);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // ✅ Combined Filter Logic (Category + Brand + Price ready)
  const filteredProducts = prods.filter((product) => {

    const categoryMatch =
      selectedCategories.length === 0 ||
      product.categories.some((cat) =>
        selectedCategories.includes(cat)
      );

    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const priceMatch =
      product.price >= priceRange[0] &&
      product.price <= priceRange[1];

    return categoryMatch && brandMatch && priceMatch;
  });

  return (
    <Container>
      <Breadcrumbs />

      <div className="flex gap-20 mb-10">

        {/* Sidebar */}
        <aside className="w-64 p-4 h-3/4 bg-white">

          <CategoryList
            prods={prods}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />

          <BrandList
            prods={prods}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
          />

          {/* Optional (ready for future use) */}
          {/* <PriceRange
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          /> */}

        </aside>

        {/* Products */}
        <Products prods={filteredProducts} />

      </div>
    </Container>
  );
}