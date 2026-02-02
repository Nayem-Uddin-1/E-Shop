import React, { useEffect, useRef, useState } from 'react';
/* Using Ionicons from react-icons for a clean, consistent stroke weight */
import {
  IoSyncOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoPersonOutline,
  IoChevronDownOutline
} from 'react-icons/io5';
import { FaBars } from "react-icons/fa6";

import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const [authOpen, setAuthOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);


  const categoryRef = useRef(null);
  const authRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        categoryOpen &&
        categoryRef.current &&
        !categoryRef.current.contains(e.target)
      ) {
        setCategoryOpen(false);
      }


    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [categoryOpen, authOpen]);


  const cartProds = useSelector((state => state.cart.cartItems))




  return (
    <header ref={categoryRef} className="max-w-full relative bg-white py-5 px-4 md:px-10 border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        <FaBars />


        {/* Logo Section */}
        <Logo />

        {/* Search Bar Container */}
        <div className="hidden lg:flex flex-1 max-w-[700px] h-12 border-2 border-[#FFB433] rounded-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search Product..."
            className="flex-1 px-5 outline-none text-sm text-gray-500"
          />

          <div className="flex items-center gap-10 px-4 border-l border-gray-200 cursor-pointer group">
            <span className="text-sm text-[#001730] font-medium">All Categories</span>
            <IoChevronDownOutline className="text-gray-400 group-hover:text-[#FFB433] transition-colors" />
          </div>

          <button className="bg-[#FFB433] px-10 h-full text-sm font-bold text-[#001730] hover:bg-[#e6a22e] transition-all">
            Search
          </button>
        </div>

        {/* Icons Group */}
        <div className="flex items-center gap-8">
          {/* Refresh Icon */}
          <div className="relative group cursor-pointer sm:hidden md:block">
            <IoSyncOutline size={30} className="text-[#001730] group-hover:text-[#FFB433] transition-colors" />
            <span className="absolute -top-2 -right-2 bg-[#FFB433] text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full text-[#001730]">
              2
            </span>
          </div>

          {/* Wishlist Icon */}
          <div className="relative group cursor-pointer sm:hidden md:block ">
            <IoHeartOutline size={30} className="text-[#001730] group-hover:text-[#FFB433] transition-colors" />
            <span className="absolute -top-2 -right-2 bg-[#FFB433] text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full text-[#001730]">
              1
            </span>
          </div>

          {/* Cart Icon */}
          <div className="relative group cursor-pointer">
            <Link to={"/carts"} >
              <IoBagHandleOutline size={30} className="text-[#001730] group-hover:text-[#FFB433] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#FFB433] text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full text-[#001730]">
                {cartProds.length}
              </span>
            </Link>
          </div>

          {/* User Icon */}
          <div className="group cursor-pointer sm:hidden md:block ">
            <IoPersonOutline onClick={(() => setAuthOpen(!authOpen))} size={30} className="text-[#001730] group-hover:text-[#FFB433] transition-colors" />

          </div>


        </div>

      </div>


    </header>
  );
};

export default Header;