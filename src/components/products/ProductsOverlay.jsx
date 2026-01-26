import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LuFullscreen } from "react-icons/lu";
import { FaRegHeart, FaCodeCompare } from "react-icons/fa6";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../redux/cartSlice';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ProductsOverlay({ prods }) {

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );


    const handleAddToCart = () => {

        const existingItem = cartItems.find(
            (item) => item.id === prods.id
        );

        let updatedCart;

        if (existingItem) {
            updatedCart = cartItems.map((item) =>
                item.id === prods.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [
                ...cartItems,
                { ...prods, quantity: 1 },
            ];
        }

        dispatch(setCartItems(updatedCart));

        toast.success('Added to cart!', {
            position: "top-center",
            autoClose: 2000,
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

        console.log("updates ", updatedCart);

    };
    return (
        <div>
            <ToastContainer />

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
                    className="            
                    flex items-center             
                    bg-[#FFB83D] 
                    hover:bg-[#f0a92e]
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
