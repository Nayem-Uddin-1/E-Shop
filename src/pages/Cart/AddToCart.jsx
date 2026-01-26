import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi';
import { HiX } from 'react-icons/hi';
import Container from '../../components/common/container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../redux/cartSlice';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartSubtotal from './CartSubtotal';








function AddToCart() {

    const dispatch = useDispatch();

    const cartProds = useSelector((state => state.cart.cartItems))

    console.log("cart items", cartProds);


    const handleIncrease = (id) => {
        const updatedCart = cartProds.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        dispatch(setCartItems(updatedCart));
    };
    const handleDecrease = (id) => {
        const updatedCart = cartProds.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );

        dispatch(setCartItems(updatedCart));
    };

    const handleRemove = (id) => {
        const updatedCart = cartProds.filter((item) => item.id !== id);
        dispatch(setCartItems(updatedCart));
        toast.error('cart deleted successfully', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <Container>
            <table className='w-full' >
                <ToastContainer />
                <thead>
                    <tr className="border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <th className="py-4 px-2 text-left w-1/3 text-center">Product</th>
                        <th className="py-4 px-2 text-center">Color</th>
                        <th className="py-4 px-2 text-center">Size</th>
                        <th className="py-4 px-2 text-center">Price</th>
                        <th className="py-4 px-2 text-center">Quantity</th>
                        <th className="py-4 px-2 text-center bg-blue-50 text-blue-600">Total</th>
                        <th className="py-4 px-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {cartProds.length === 0 && (
                        <tr>
                            <td colSpan="7" className="py-10 text-center text-gray-400">
                                Cart is empty
                            </td>
                        </tr>
                    )}

                    {cartProds.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100">

                            {/* Product */}
                            <td className="py-6 px-2">
                                <div className="flex items-center gap-4">
                                    <div className="w-40 h-30 border border-gray-200  shrink-0">
                                        <img
                                            src={item.images?.[0] || "/placeholder.png"}
                                            alt={item.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="font-medium text-sm">
                                        {item.name}
                                    </span>
                                </div>
                            </td>

                            {/* Color */}
                            <td className="py-6 px-2 text-center">
                                {item.color ? (
                                    <span
                                        className="inline-block w-4 h-4 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                ) : (
                                    "-"
                                )}
                            </td>

                            {/* Size */}
                            <td className="py-6 px-2 text-center">
                                {item.size || "-"}
                            </td>

                            {/* Price */}
                            <td className="py-6 px-2 text-center">
                                ${item.price}
                            </td>

                            {/* Quantity */}
                            <td className="py-6 px-2">
                                <div className="flex items-center justify-center gap-3">
                                    <button onClick={() => handleDecrease(item.id)} className='cursor-pointer' >
                                        <FiMinus size={14} />
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button onClick={() => handleIncrease(item.id)} className='cursor-pointer' >
                                        <FiPlus size={14} />
                                    </button>
                                </div>
                            </td>

                            {/* Total */}
                            <td className="py-6 px-2 text-center font-medium">
                                ${item.price * item.quantity}
                            </td>

                            {/* Remove */}
                            <td className="py-6 px-2 text-center relative">
                                <button onClick={() => handleRemove(item.id)} className="border p-2 cursor-pointer rounded bg-gray-800 text-white relative group">
                                    <HiX size={20} />
                                    <div className="absolute -right-10 -top-10 border py-1 px-2 rounded text-sm text-black bg-red-600 text-white hidden group-hover:block">
                                        delete
                                    </div>
                                </button>
                            </td>


                        </tr>
                    ))}
                </tbody>


            </table>

            <CartSubtotal/>


        </Container>
    )
}

export default AddToCart