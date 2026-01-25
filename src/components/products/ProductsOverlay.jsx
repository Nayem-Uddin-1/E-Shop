import React from 'react'
import { Link } from 'react-router-dom';
import { LuFullscreen } from "react-icons/lu";
import { FaRegHeart, FaCodeCompare } from "react-icons/fa6";
import { HiOutlineShoppingBag } from 'react-icons/hi';

function ProductsOverlay({ prods }) {

    const handleAddToCart = () => {
        console.log("Added to cart!", prods);
    };

    return (
        <div>

            {/* Right icons */}
            <div
                className="
          flex flex-col gap-3 text-[10px]
          absolute top-20 -right-14
          opacity-0 translate-x-6
          group-hover:right-3 group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-500 ease-out text-5xl
        "
            >
                <Link className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded hover:bg-black hover:text-white transition">
                    <LuFullscreen />
                </Link>

                <Link className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded hover:bg-black hover:text-white transition">
                    <FaRegHeart />
                </Link>

                <Link className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded hover:bg-black hover:text-white transition">
                    <FaCodeCompare />
                </Link>
            </div>

            {/* Add to cart */}
            <div
                className="
          flex justify-center
          absolute -bottom-14 left-1/2 -translate-x-1/2
          opacity-0 translate-y-6
          group-hover:bottom-4 group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500 ease-out
        "
            >
                <button onClick={handleAddToCart}
                    className="            flex items-center             bg-[#FFB83D] hover:bg-[#f0a92e]
            text-gray-800 font-semibold
            py-2 
            transition-colors duration-200
          "
                >
                    <HiOutlineShoppingBag className="text-xl ml-5" />
                    <span className='w-30'>Add To Cart</span>
                </button>
            </div>

        </div>
    );
}

export default ProductsOverlay;
