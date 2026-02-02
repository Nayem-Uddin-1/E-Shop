import React from 'react';
import { HiOutlineTruck, HiOutlineRefresh, HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineEmojiEvents } from 'react-icons/md';

const FeaturesBar = () => {
  return (
    <div className="max-w-full bg-white py-10 px-6 mt-10 ">
      <div className="max-w-7xl mx-auto flex  sm:flex-col sm:items-center md:items-center   sm:gap-20 sm:p-10 md:flex-col lg:flex-row flex-wrap justify-between gap-6">
        
        {/* Free Shipping */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <HiOutlineTruck className="text-[#f5a623] text-4xl" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Free Shipping</h4>
            <p className="text-gray-500 text-xs">When ordering over $100</p>
          </div>
        </div>

        {/* Free Return */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <HiOutlineRefresh className="text-[#f5a623] text-4xl" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Free Return</h4>
            <p className="text-gray-500 text-xs">Get Return within 30 days</p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <HiOutlineShieldCheck className="text-[#f5a623] text-4xl" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Secure Payment</h4>
            <p className="text-gray-500 text-xs">100% Secure Online Payment</p>
          </div>
        </div>

        {/* Best Quality */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <MdOutlineEmojiEvents className="text-[#f5a623] text-4xl" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Best Quality</h4>
            <p className="text-gray-500 text-xs">Original Product Guaranteed</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesBar;