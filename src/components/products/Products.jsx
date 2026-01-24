import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import img_one from "../../assets/images/imgi_3_product_img_1.jpg"
import img_two from "../../assets/images/imgi_95_section_category_1.jpg"
import ProductsAvailableCount from './ProductsAvailableCount';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuFullscreen } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { HiOutlineShoppingBag } from 'react-icons/hi';



function Products() {

    const [available, setAvailable] = useState(true)

    const handleAddToCart = () => {
        console.log("Added to cart!");
    };

    return (
        <div className='my-20'>

            <div className='my-5 flex justify-between'>
                <h2 className='text-3xl font-bold ' >Gamer World</h2>
                <Link className='flex justify-center gap-3 items-center' >View More <FaLongArrowAltRight /> </Link>
            </div>
            <div className='flex justify-center' >

                <div className='flex gap-10   '>

                    <div className=" w-[270px] "  >
                        <div className='flex flex-col items-center justify-center '>
                            <img src={img_two} alt={"one"} />
                        </div>
                    </div>

                    {
                        [...Array(3)].map((item, i) => (

                            <div className=" w-[270px] bg-white px-10   relative group ">

                                <div className="w-full h-15 max-w-xs">

                                    {available &&
                                        <ProductsAvailableCount available={20} />
                                    }

                                </div>

                                <div className='flex flex-col items-center justify-center '>
                                    <img src={img_one} alt={"one"} />
                                </div>

                                <div className=' flex flex-col gap-5 '>
                                    <div className='flex gap-1 '>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>

                                    <p>Xoggle aute et pariatur adipisicing nostrud et</p>

                                    <div className='flex gap-3 font-bold'>
                                        <del className='text-gray-400'><h3>$88.88</h3></del>
                                        <h3 className='mb-5'>$88.88</h3>
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



            </div>
        </div>
    )
}

export default Products