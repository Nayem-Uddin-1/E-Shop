import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import img_one from "../../assets/images/imgi_3_product_img_1.jpg"
import ProductsAvailableCount from './ProductsAvailableCount';

import ProductsOverlay from './ProductsOverlay';
import { Link } from 'react-router-dom';



function Products({ prods ,type }) {

  const [available, setAvailable] = useState(true)

   console.log("sluggggiiii",prods[0].slug);
   

  return (
    <div className={`grid lg:grid-cols-3 gap-10 sm:grid-cols-1  md:grid-cols-2  
    ${type === "related" ? "lg:grid-cols-4" : ""} `}>
      {
        prods?.map((item, i) => (

          <div className="w-67.5 bg-white px-6 pb-6 overflow-hidden relative group transition-shadow duration-300 hover:shadow-lg">

            {/* Stock badge */}
            <div className="w-full h-15 max-w-xs">
              {available && (
                <ProductsAvailableCount available={item.stock} />
              )}
            </div>
            {/* Image */}
            <div className="flex items-center justify-center h-55">
              <img
                src={item.images[0]}
                alt={item.name}
                className="object-contain"
              />
            </div>
            {/* Info */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                {item.rating}
              </div>
              <Link to={`/product/${item.slug}`} target='_black' className="text-sm font-bold hover:text-blue-700 cursor-pointer ">{item.name}</Link>
              <div className="flex gap-3 font-bold">
                <del className="text-gray-400">{item.price}</del>
                <span>{item.finalPrice}</span>
              </div>
            </div>
            {/* Overlay */}
            <ProductsOverlay prods={item} />
          </div>
        ))

      }
    </div>
  )
}

export default Products