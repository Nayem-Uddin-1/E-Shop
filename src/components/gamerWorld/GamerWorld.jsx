import React from 'react'
import Products from '../products/Products'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import img_two from "../../assets/images/imgi_95_section_category_1.jpg"
import { useSelector } from 'react-redux';




function GamerWorld() {

       const prods =useSelector((state=>state.product.products))

    return (
        <div>

            <div className='my-5 flex justify-between'>
                <h2 className='text-3xl font-bold ' >Gamer World</h2>
                <Link className='flex justify-center gap-3 items-center' >View More <FaLongArrowAltRight /> </Link>
            </div>

            <div className='flex justify-center gap-10' >
                <div className=" w-[270px] "  >
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