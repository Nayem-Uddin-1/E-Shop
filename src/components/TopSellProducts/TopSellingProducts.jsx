import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SellingProducts from '../products/SellingProducts';
import { useSelector } from 'react-redux';


function TopSellingProducts() {

        const prods = useSelector((state => state.product.products))

        const screenWidth = window.innerWidth;

    let visibleProducts = prods;

  if (screenWidth < 1024) {
    visibleProducts = prods.slice(0, 2);  
} else {
    visibleProducts = prods.slice(0, 4);
}

  return (
    <div className='mt-10'>
        
         <div className='my-5 flex justify-between '>
                <h2 className='text-3xl font-bold ' >Top Selling Products</h2>
                <Link to={"/shop"} target="_blank" className='flex justify-center gap-3 items-center  font-bold ' >
                <span className="text-red-500 underline">
                View More

                </span>
                
                 <FaLongArrowAltRight /> </Link>
            </div>

            <SellingProducts prods={visibleProducts} type={"related"} />


    </div>
  )
}

export default TopSellingProducts