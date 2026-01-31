import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";


function LeftSide({product}) {
        const [selectedImage, setSelectedImage] = useState(product.images[0]);
    
  return (
    <div>
         {/* Left side: Images */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2">
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      className={`w-20 h-20 object-cover cursor-pointer border-2 ${
                        selectedImage === img ? "border-blue-500" : "border-gray-200"
                      }`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
                <div className="flex-1">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
    </div>
  )
}

export default LeftSide