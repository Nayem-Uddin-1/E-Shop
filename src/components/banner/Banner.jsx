

import { Link } from "react-router-dom"
import { MdKeyboardArrowRight } from "react-icons/md";
import FeaturesBar from "./FeaturesBar";


export default function Banner() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl h-[500px] grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Large Card */}
        <div className="lg:col-span-2 bg-[#fdebe4] p-8 flex items-center justify-evenly relative overflow-hidden">
          <div className="max-w-sm">
            <span className="inline-block text-xs bg-white px-3 py-1 rounded-full mb-4">NEW RELEASED</span>
            <h3 className="text-xl text-gray-700">Apple Wireless</h3>
            <h1 className="text-5xl font-bold mt-2">Samsung</h1>
            <h2 className="text-4xl font-semibold">S10+</h2>
            <Link to={"/shop"} className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-orange-600 pb-2 cursor-pointer">
              Shop Now <MdKeyboardArrowRight />

            </Link>
          </div>

          <img
            src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-a55/galaxy-a55-02-228x228.webp"
            alt="Samsung S10+"
            className="w-[280px] object-contain"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 ">

          {/* Top Small Card */}
          <div className="bg-[#e6f4ff] p-6 flex items-center justify-between">
            <div>
              <span className="inline-block text-xs bg-white px-3 py-1 rounded-full mb-3">GAMING</span>
              <h3 className="text-lg font-semibold">Apple Smart Watch</h3>
              <Link to={"/shop"} className="mt-4 cursor-pointer inline-flex items-center gap-2 text-sm">
                Shop Now <MdKeyboardArrowRight />

              </Link>
            </div>
            <img
              src="https://img.drz.lazcdn.com/static/bd/p/f73a495b24f5c8c629828d47441ba39c.jpg_400x400q75.avif"
              alt="Apple Watch"
              className="w-[120px] object-contain"
            />
          </div>

          {/* Bottom Small Card */}
          <div className="bg-white border p-6 flex items-center justify-between">
            <div>
              <span className="inline-block text-xs bg-yellow-200 px-3 py-1 rounded-full mb-3">GAMING</span>
              <h3 className="text-lg font-semibold">Xbox 5th Version</h3>
              <button className="mt-4 inline-flex items-center gap-2 text-sm">
                Shop Now <MdKeyboardArrowRight />

              </button>
            </div>
            <img
              src="/xbox.png"
              alt="Xbox"
              className="w-[120px] object-contain"
            />
          </div>

        </div>
      </div>

       <FeaturesBar/>
    </section>
  )
}
