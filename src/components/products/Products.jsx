import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import img_one from "../../assets/images/imgi_3_product_img_1.jpg"
import ProductsAvailableCount from './ProductsAvailableCount';
import { Link } from 'react-router-dom';
import { LuFullscreen } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { HiOutlineShoppingBag } from 'react-icons/hi';



function Products({prods}) {

    const [available, setAvailable] = useState(true)

    const handleAddToCart = () => {
        console.log("Added to cart!");
    };

    console.log("products",prods[0].images[0]);
    

    return (
        <div className='grid grid-cols-3 gap-10   '>

            {
                prods?.map((item, i) => (
                           
                            
                    <div className=" basis-[30%] w-[270px] bg-white px-10   relative group ">

                        <div className="w-full h-15 max-w-xs">

                            {available &&
                                <ProductsAvailableCount available={item.stock} />
                            }

                        </div>

                        <div className='flex flex-col items-center justify-center '>
                            <img src={item.images[0]} alt={item.name} />
                        </div>

                        <div className=' flex flex-col gap-5 '>
                            <div className='flex items-center gap-3 '>
                                <FaStar className='text-yellow-500' />
                                
                                {item.rating}
                            </div>

                            <p>{item.name}</p>

                            <div className='flex gap-3 font-bold'>
                                <del className='text-gray-400'><h3>{item.price}</h3></del>
                                <h3 className='mb-5'>{item.finalPrice}</h3>
                            </div>
                        </div>
                        {/* icons */}
                        <div>

                            <div>

                                <div className='flex flex-col gap-3 text-10 absolute top-25 -right-15 group-hover:right-3'>
                                    <Link className='w-10 h-10 bg-gray-200 flex justify-center items-center' >
                                        <LuFullscreen />
                                    </Link>
                                    <Link className='w-10 h-10 bg-gray-200 flex justify-center items-center' >
                                        <FaRegHeart />
                                    </Link>
                                    <Link className='w-10 h-10 bg-gray-200 flex justify-center items-center' >
                                        <FaCodeCompare />
                                    </Link>

                                </div>

                                <div className=" flex justify-center absolute -bottom-15 group-hover:bottom-4">
                                    <button
                                        onClick={handleAddToCart}
                                        className="
                      flex items-center justify-center gap-3
                      bg-[#FFB83D] hover:bg-[#f0a92e] 
                        text-gray-800 font-semibold 
                 transition-colors duration-200 py-1 px-4  
           
        "
                                    >
                                        <HiOutlineShoppingBag className="text-2xl" />
                                        <span className="text-lg">Add To Cart</span>
                                    </button>
                                </div>


                            </div>

                        </div>

                    </div>


                ))

            }
        </div>
    )
}

export default Products