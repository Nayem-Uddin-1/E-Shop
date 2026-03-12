import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

const NewsletterBanner = () => {
  return (
    <section className="relative w-full bg-[#d0e9ff] overflow-hidden py-3 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between min-h-[200px] my-20">
      
      {/* Left Image: Headphones */}
      <div className="hidden md:block w-1/4 lg:w-1/5 animate-fade-in">
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop" 
          alt="Blue Headphones" 
          className="w-full h-auto drop-shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
        />
      </div>

      {/* Center Content */}
      <div className="flex-1 text-center z-10 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Get <span className="text-[#ffb400]">20% Off</span> Discount Coupon
        </h2>
        <p className="text-gray-600 font-medium mb-8">
          by Subscribe our Newsletter
        </p>

        {/* Input Group */}
        <form className="flex flex-col sm:flex-row items-stretch justify-center gap-0 w-full max-w-lg mx-auto shadow-lg rounded-md overflow-hidden">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="block w-full pl-11 pr-4 py-4 bg-white text-gray-700 text-sm focus:outline-none border-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#ffb400] hover:bg-[#e6a200] text-gray-900 font-bold py-4 px-8 transition-colors duration-300 whitespace-nowrap"
          >
            Get the Coupon
          </button>
        </form>
      </div>

      {/* Right Image: Watch and Earbuds */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/4 lg:w-1/5 gap-4">
        <img 
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&auto=format&fit=crop" 
          alt="Smart Watch" 
          className="w-4/5 h-auto drop-shadow-xl transform rotate-6"
        />
        <img 
          src="https://images.unsplash.com/photo-1588423770574-910ae26c85e7?q=80&w=400&auto=format&fit=crop" 
          alt="Wireless Earbuds" 
          className="w-1/2 h-auto drop-shadow-lg -mt-8 translate-x-4"
        />
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-full bg-blue-200/30 skew-x-[-20deg] -translate-x-16 pointer-events-none"></div>
    </section>
  );
};

export default NewsletterBanner;