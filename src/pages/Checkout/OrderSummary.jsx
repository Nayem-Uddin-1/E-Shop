import React, { useState } from 'react';
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
    const [paymentMethod, setPaymentMethod] = useState('bank');

    const products = [
        { id: 1, name: 'Apple Watch', qty: 1, specs: '64GB, Black, 44mm, Chain Belt', price: 38 },
        { id: 2, name: 'Apple Watch', qty: 1, specs: '64GB, Black, 44mm, Chain Belt', price: 38 },
        { id: 3, name: 'Apple Watch', qty: 1, specs: '64GB, Black, 44mm, Chain Belt', price: 38 },
    ];

    const cartCheckout=useSelector((state=>state.order.orderData))

    console.log("order list",cartCheckout);
    

    return (
        <div className="max-w-[553px]">
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>

            <div className="flex justify-between text-xs font-bold tracking-widest text-gray-500 mb-4 uppercase">
                <span>Product</span>
                <span>Total</span>
            </div>
            <hr className="border-gray-100 mb-6" />

            {/* Product List */}
            <div className="space-y-6 mb-8">
                {products.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-700 font-medium">
                                {item.name} <span className="text-blue-400 text-sm ml-1 font-normal">x{item.qty}</span>
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">{item.specs}</p>
                        </div>
                        <span className="font-semibold text-gray-700">${item.price}</span>
                    </div>
                ))}
            </div>

            <hr className="border-gray-100 mb-6" />

            {/* Pricing Details */}
            <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center font-bold text-gray-600">
                    <span className="uppercase tracking-tight">Subtotal</span>
                    <span>$365</span>
                </div>

                <div className="space-y-1">
                    <div className="flex justify-between items-center text-gray-400 text-xs font-bold uppercase tracking-wider">
                        <span>Shipping</span>
                        <span>+$0</span>
                    </div>
                    <p className="font-bold text-gray-800">Free Shipping</p>
                </div>
            </div>

            <hr className="border-gray-100 my-6" />

            {/* Total Section */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Total</h2>
                <span className="text-2xl font-bold text-red-500">$365</span>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4 mb-8">
                <div className="cursor-pointer" onClick={() => setPaymentMethod('bank')}>
                    <div className="flex items-center gap-3">
                        {paymentMethod === 'bank' ? <FaCheckCircle className="text-gray-800" /> : <FaRegCircle className="text-gray-300" />}
                        <span className={`text-sm font-medium ${paymentMethod === 'bank' ? 'text-gray-800' : 'text-gray-500'}`}>Direct Bank Transfer</span>
                    </div>
                    {paymentMethod === 'bank' && (
                        <p className="ml-7 mt-3 text-xs text-gray-400 leading-relaxed bg-gray-50 p-3 rounded">
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPaymentMethod('cod')}>
                    {paymentMethod === 'cod' ? <FaCheckCircle className="text-gray-800" /> : <FaRegCircle className="text-gray-300" />}
                    <span className={`text-sm font-medium ${paymentMethod === 'cod' ? 'text-gray-800' : 'text-gray-500'}`}>Cash on Delivery</span>
                </div>

                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPaymentMethod('card')}>
                    {paymentMethod === 'card' ? <FaCheckCircle className="text-gray-800" /> : <FaRegCircle className="text-gray-300" />}
                    <span className={`text-sm font-medium ${paymentMethod === 'card' ? 'text-gray-800' : 'text-gray-500'}`}>Credit/Debit Cards or Paypal</span>
                </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#1a1a1a] text-white py-4 font-bold text-xs uppercase tracking-widest hover:bg-black transition-colors">
                Place Order Now
            </button>
        </div>
    );
};

export default OrderSummary;