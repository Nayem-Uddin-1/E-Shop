import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Container from '../common/container/Container';

const PromoBannerOne = () => {
  const banners = [
    {
      id: 1,
      category: "HEADSET",
      title: "Beat wireless Headphone",
      bgColor: "bg-[#FEE2E2]", // Soft pink/red
      textColor: "text-gray-900",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", // Placeholder red headset
      accentColor: "border-orange-400"
    },
    {
      id: 2,
      category: "SMART WATCH",
      title: "Samsung Smart Watch II",
      bgColor: "bg-[#D1FAE5]", // Soft light blue/green
      textColor: "text-gray-900",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1000&auto=format&fit=crop", // Placeholder controller
      accentColor: "border-transparent"
    }
  ];

  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-6 bg-gray-50 font-sans mt-20">
      {banners.map((banner) => (
      <Link to={"/product/:slug"}
       key={banner.id}
          className={`${banner.bgColor} relative overflow-hidden rounded-sm p-8 flex-1 min-h-[300px] flex flex-col justify-center transition-transform `}
          >
        <div
         
        >
         
          <div className="relative z-10 max-w-[60%]">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              {banner.category}
            </span>
            <h2 className={`text-4xl font-bold mt-4 mb-8 leading-tight ${banner.textColor}`}>
              {banner.title}
            </h2>
            <div className="group inline-flex flex-col">
              <Link className="flex items-center font-bold text-sm tracking-wide">
                Shop Now <FiChevronRight className="ml-1 text-lg" />
              </Link>
              <div className={`h-[2px] w-12 mt-1 border-b-2 ${banner.accentColor}`}></div>
            </div>
          </div>

         
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-3/4 h-3/4 flex items-center justify-center">
            <img
              src={banner.image}
              alt={banner.title}
              className="object-contain w-full h-full drop-shadow-2xl rotate-[-15deg]  transition-transform duration-500"
            />
          </div>
          
        
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-20 -mt-20"></div>
          </div>
        </div>
        
        </Link>
      ))}
    </div>
    </Container>
  );
};

export default PromoBannerOne;