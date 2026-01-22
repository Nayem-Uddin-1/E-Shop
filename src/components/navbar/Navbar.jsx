import React, { useEffect, useRef, useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import Container from '../common/container/Container';
import { Link } from 'react-router-dom';
import { FcElectronics } from "react-icons/fc";
import { MdChevronRight } from "react-icons/md";
import { useSelector } from 'react-redux';



const Navbar = () => {
  const navLinks = [
    { name: 'Homepage', hasDropdown: true },
    { name: 'Shop', hasDropdown: true },
    { name: 'Pages', hasDropdown: true },
    { name: 'About', hasDropdown: false },
    { name: 'Blog', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  const [openCat, setOpenCat] = useState(false)
  const dropdownRef = useRef(null);

  const products = useSelector((state) => state.product.products)
  const categories = [...new Set(products.flatMap((p) => p.categories))];



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCat(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  console.log("productsss", categories);



  return (
    <section className='bg-[#FFB82E]'>
      <Container>
        <nav className=" w-full py-3 flex items-center justify-between font-sans">
          {/* Left Section: Categories Dropdown */}
          <div ref={dropdownRef} className="flex items-center space-x-8 relative">

            <button className="bg-white text-gray-900 px-5 py-3 rounded-t-md flex items-center justify-between min-w-60 font-medium transition-colors hover:bg-gray-50"
              onClick={() => setOpenCat(!openCat)}
            >
              <div className="flex items-center gap-3">
                <HiMenuAlt2 className="text-xl" />
                <span>All Categories</span>
              </div>
              <FiChevronDown className="ml-2" />
            </button>

            {
              openCat &&
              <div className='min-w-60 top-11.5 max-h-[400px] absolute bg-white px-2 overflow-y-auto
                scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
                hover:scrollbar-thumb-gray-500 transition-colors'>
                {categories.map((category, index) => (
                  <Link key={index} className='flex items-center gap-5 py-2 relative'>
                    {/* <FcElectronics /> */}
                    <h3>{category}</h3>
                    <MdChevronRight className='absolute top-3 right-2' />
                  </Link>
                ))}
              </div>

            }

            {/* Middle Section: Main Navigation */}
            <ul className="hidden lg:flex items-center space-x-7 text-gray-900 font-medium">
              {navLinks.map((link) => (
                <li key={link.name} className="flex items-center cursor-pointer hover:text-white transition-colors gap-1">
                  {link.name}
                  {link.hasDropdown && <FiChevronDown className="text-sm mt-0.5" />}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: CTA Button */}
          <button className="bg-[#1D1D1D] text-white px-6 py-3 flex items-center gap-2 font-bold hover:bg-black transition-all">
            Become a Seller
            <FiChevronRight className="text-lg" />
          </button>
        </nav>
      </Container>
    </section>
  );
};

export default Navbar;