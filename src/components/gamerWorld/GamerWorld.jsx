import React from 'react'
import Products from '../products/Products'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Container from '../common/container/Container';
import img_two from "../../assets/images/gamer_world_banner.jpg"





function GamerWorld() {

    const prods = useSelector((state => state.product.products))

    const screenWidth = window.innerWidth;

    let visibleProducts = prods;

  if (screenWidth < 1024) {
    visibleProducts = prods.slice(0, 2);  
} else {
    visibleProducts = prods.slice(0, 3);
}

    return (
        <Container>

          <div className='pt-12' >
              <div className='my-5 flex justify-between'>
                <h2 className='text-3xl font-bold ' >Gamer World</h2>
                <Link to={"/shop"} target="_blank" className='flex justify-center gap-3 items-center  font-bold ' >
                <span className="text-red-500 underline">
                View More

                </span>
                
                 <FaLongArrowAltRight /> </Link>
            </div>

            <div className='  ' >                

               <Products prods={visibleProducts} type="home" img={img_two} />
            </div>
          </div>


        </Container>
    )
}

export default GamerWorld