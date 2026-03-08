import React from 'react';
import { FaChevronRight, FaApple, FaGooglePlay } from 'react-icons/fa';

const ScrollBanner = () => {
  return (
    <div className="w-full flex gap-6 justify-between">
      
      {/* Flash Sale Card */}
      <div className="flex-1 border bg-orange-50 p-8 relative overflow-hidden h-80 flex flex-col justify-between">
        <div className="flex gap-4">
          {['Days', 'Hours', 'Min', 'Sec'].map((label) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">0</div>
              <p className="text-xs mt-1 font-medium text-gray-600">{label}</p>
            </div>
          ))}
        </div>
        
        <div className="z-10">
          <h2 className="text-3xl font-black text-gray-900">WOO! Flash Sale</h2>
          <button className="mt-2 flex items-center text-sm font-bold border-b-2 border-orange-400">
            Shop Now <FaChevronRight className="ml-1 text-[10px]" />
          </button>
        </div>

        {/* Decorative Controller Image */}
        <img 
          src="https://images.unsplash.com/photo-1605902711622-cfb43c443ffb?auto=format&fit=crop&q=60&w=200" 
          alt="Controller" 
          className="absolute -right-4 -bottom-4 w-48 rotate-12 opacity-90"
        />
      </div>

      {/* Mobile App Card */}
      <div className="flex-1 border bg-slate-100 p-8 flex flex-col items-center text-center h-80 overflow-hidden">
        <p className="text-[10px] tracking-widest font-bold text-gray-400 mb-2 uppercase">Mobile App Version</p>
        <h2 className="text-2xl font-bold text-gray-900 leading-tight">
          Get Our <span className="text-red-500 underline decoration-2">Mobile App</span><br/>
          It's Make easy for you life !
        </h2>

        <div className="flex gap-3 mt-6">
          <button className="flex items-center bg-white px-3 py-1.5 rounded-lg border shadow-sm">
            <FaGooglePlay className="text-blue-500 mr-2" />
            <div className="text-left"><p className="text-[8px] leading-none">GET IT ON</p><p className="font-bold text-xs">Google Play</p></div>
          </button>
          <button className="flex items-center bg-white px-3 py-1.5 rounded-lg border shadow-sm">
            <FaApple className="text-xl mr-1" />
            <div className="text-left"><p className="text-[8px] leading-none">Download on</p><p className="font-bold text-xs">App Store</p></div>
          </button>
        </div>

        <div className="mt-6 w-56 h-full bg-gray-800 rounded-t-2xl shadow-xl border-4 border-gray-900" />
      </div>

    </div>
  );
};

export default ScrollBanner;