import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RightSide({ product }) {


    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );


    const handleAddToCart = () => {

        const existingItem = cartItems.find(
            (item) => item.id === product.id
        );

        let updatedCart;

        if (existingItem) {
            updatedCart = cartItems.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [
                ...cartItems,
                { ...product, quantity: 1 },
            ];
        }

        dispatch(setCartItems(updatedCart));

            toast.success('Added to cart!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        setTimeout(() => {
            navigate("/carts");
        }, 2000)

        
 
    };


 

    return (
         <div >
      
     
            <ToastContainer />

      {/* Right side: Product Info */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-500">{product.rating} / 5</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-green-600">
            ${product.finalPrice}
          </span>
          {product.discount > 0 && (
            <span className="text-gray-400 line-through">${product.price}</span>
          )}
        </div>

        {/* Stock */}
        <div className="text-gray-600">
          {product.stock > 0 ? (
            <span>In stock: {product.stock}</span>
          ) : (
            <span className="text-red-500">Out of stock</span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700">{product.description}</p>

        {/* Additional Info */}
        <div className="text-gray-600">
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>SKU:</strong> {product.SKU}</p>
          <p><strong>Dimensions:</strong> {Object.values(product.dimensions).join(" x ")}</p>
          <p><strong>Weight:</strong> {product.weight}</p>
        </div>

        {/* Add to Cart */}
        <button 
        onClick={handleAddToCart}
        className="bg-[#F0A92E] hover:bg-[#F0A92E] text-white font-semibold py-3 px-6 transition w-2/4">
          Add to Cart
        </button>

        {/* Reviews */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
          {product.reviews.map((review, idx) => (
            <div key={idx} className="border-b border-gray-200 py-2">
              <p className="font-semibold">{review.user}</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.floor(review.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-500 text-sm">{review.rating}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default RightSide