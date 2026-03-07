"use client";
import React, { useEffect, useRef, useState } from "react";

function ShopBrand() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const brands = [
    { name: "OnePlus", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/OnePlus_logo_2020.svg" },
    { name: "Tencent", logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Tencent_2019_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Lenovo_logo.svg" },
    { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Huawei_logo.svg" },
    { name: "Nexus", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Nexus_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Firefox", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Firefox_logo%2C_2017.svg" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
    { name: "Brave", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Brave_logo.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  ];

  return (
    <div
      ref={sectionRef}
      className={`brand-section py-10 transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <h2 className="text-3xl font-bold mb-12">Shop by Brand</h2>

      <div className="brand-container grid grid-cols-3 px-3 md:px-0 md:grid-cols-6 bg-white">
        {brands.map((brand, index) => (
          <div key={index} className="border-r border border-gray-100 p-2 h-32.5 flex justify-center items-center ">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopBrand;