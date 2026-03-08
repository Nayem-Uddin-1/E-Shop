import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



function SellingProducts({prods,type}) {
  
    
    
  return (
   <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
      {
        prods?.map((item, i) => (

          <div className="bg-white flex gap-5 items-center justify-center p-7 overflow-hidden relative group transition-shadow duration-300 hover:shadow-lg">

         
            {/* Image */}
            <div className="  w-2/4 flex items-center justify-center h-55">
              <img
                src={item.images[0]}
                alt={item.name}
                className="object-contain"
              />
            </div>
            {/* Info */}
            <div className=" w-2/4 flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                {item.rating}
              </div>
              <Link to={`/product/${item.slug}`} target='_black' className="text-sm font-bold hover:text-blue-700 cursor-pointer ">{item.name}</Link>
              <div className="flex gap-3 font-bold">
                <del className="text-gray-400">{item.price}</del>
                <span>{item.finalPrice}</span>
              </div>

               <button 
            //    onClick={handleAddToCart}
                    className="            
                    flex items-center  
                    justify-center           
                    bg-[#FFB83D] 
                    hover:bg-[#f0a92e]
            text-gray-800 font-semibold
            py-2
            transition-colors duration-200
             w-2/4
          "
                >
                    <span className=''>Add To Cart</span>
                </button>
            </div>

            
            
          </div>
        ))

      }
    </div>
  )
}

export default SellingProducts