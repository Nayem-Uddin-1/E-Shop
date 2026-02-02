import React from 'react'
import Products from '../products/Products'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import img_two from "../../assets/images/imgi_95_section_category_1.jpg"
import { useSelector } from 'react-redux';




function GamerWorld() {

    const prods = useSelector((state => state.product.products))

    const screenWidth = window.innerWidth;

    let visibleProducts = prods;

    if (screenWidth < 1024) {
        visibleProducts = prods.slice(0, 2);  
    }


    return (
        <div>

            <div className='my-5 flex justify-between '>
                <h2 className='text-3xl font-bold ' >Gamer World</h2>
                <Link to={"/shop"} target="_blank" className='flex justify-center gap-3 items-center  font-bold ' >
                <span className="text-red-500 underline">
                View More

                </span>
                
                 <FaLongArrowAltRight /> </Link>
            </div>

            <div className='flex justify-center gap-10  ' >
                <div className=" w-[270px] sm:hidden lg:block "  >
                    <div className='flex flex-col items-center justify-center '>
                        <img src={img_two} alt={"one"} />
                    </div>
                </div>

                <Products prods={prods} />
            </div>


        </div>
    )
}

export default GamerWorld