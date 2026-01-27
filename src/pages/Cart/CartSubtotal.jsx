// CartSummary.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderData } from "../../redux/orderSlice";
import { useNavigate } from "react-router-dom";


function CartSubtotal() {
  const [shipping, setShipping] = useState(0);
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");


  const dispatch = useDispatch()
  const navigate=useNavigate()
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );


  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);


  const GrandTotal = subtotal + shipping;




  const handleShippingChange = (e) => {
    const value = Number(e.target.value);
    setShipping(value);
  };

  const handleUpdateCart = () => {
    alert(`Shipping updated for ${country}, ZIP: ${zip}`);
  };


  const handleCheckout = () => {

     if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const orderData = {
      items: cartItems,
      subtotal,
      // shipping,
      // tax,
      total: GrandTotal,
      status: "pending",
    };

    dispatch(setOrderData(orderData))
     navigate("/checkout");  
    console.log("checkout");

  }

  return (
    <div className="max-w-sm w-full border p-6 rounded shadow-md space-y-6 ml-auto">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span className="text-red-500 font-semibold">${subtotal}</span>
      </div>

      <div>
        <span className="block mb-2">Shipping</span>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="shipping"
              value={0}
              checked={shipping === 0}
              onChange={handleShippingChange}
              className="mr-2"
            />
            Free Shipping +$0.00
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="shipping"
              value={0}
              checked={shipping === 0}
              onChange={handleShippingChange}
              className="mr-2"
            />
            Flat Rate +$0.00
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="shipping"
              value={0}
              checked={shipping === 0}
              onChange={handleShippingChange}
              className="mr-2"
            />
            Local Delivery +$0.00
          </label>
        </div>
      </div>

      <div>
        <span className="block mb-2">Calculate Shipping</span>
        <select
          className="w-full border rounded px-3 py-2 mb-2"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>
        <input
          type="text"
          placeholder="Postcode / ZIP"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-2"
        />
        <button
          onClick={handleUpdateCart}
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
        >
          Update Cart
        </button>
      </div>

      <div className="flex justify-between font-semibold text-red-500 text-lg">
        <span>Total</span>
        <span>${GrandTotal}</span>
      </div>

      <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}


export default CartSubtotal;