import React, { useState } from "react";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import PriceRange from "./PriceRange";
import BrandList from "./BrandList";
import Breadcrumbs from "./Breadcrumbs";
import Container from "../../components/common/container/Container";


export default function Shop() {


  const prods = useSelector((state => state.product.products))

  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = selectedCategories.length === 0
    ? prods
    : prods.filter(product =>
      product.categories.some(cat => selectedCategories.includes(cat))
    );




  return (

    <Container>
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 flex gap-8  ">


        {/* Sidebar */}
        <aside className="w-64 p-4 bg-white">
          <CategoryList
            prods={prods}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <PriceRange className="z-1000000" />
          <BrandList prods={prods} />
        </aside>
        {/* Products */}
        <Products prods={prods} />


      </div>
    </Container>

  );
}
