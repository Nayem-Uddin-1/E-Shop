import React from "react";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import PriceRange from "./PriceRange";
import BrandList from "./BrandList";
 

export default function Shop() {


 const prods = useSelector((state => state.product.products))


  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8  ">

      {/* Sidebar */}
      <aside className="w-64 p-4 bg-white">
      
        <CategoryList prods={prods} />
        <PriceRange className="z-1000000" />
        <BrandList prods={prods} />
       

      </aside>

      {/* Products */}
      <Products prods={prods} />


    </div>
  );
}
