import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi';
import { LuChevronDown } from 'react-icons/lu';
import { countryCityData } from './countryData';

function BillingDetails() {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [cities, setCities] = useState([]);

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        setCities(countryCityData[selectedCountry] || []);
        setCity(""); 
    };

    return (
        <section>
            <div className='w-[583px]'>
                <h2 className="text-2xl font-bold text-gray-800">Billing Details</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                    {/* First Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                            First Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Demo Name"
                            className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-300 text-gray-700"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Last Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Demo Name"
                            className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-300 text-gray-700"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Email Address<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-300 text-gray-700"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Number"
                            className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-300 text-gray-700"
                        />
                    </div>

                    {/* Country */}
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-600">
                            Country<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white text-gray-700 appearance-none cursor-pointer"
                                value={country}
                                onChange={handleCountryChange}
                            >
                                <option value="" disabled>Select Country</option>
                                {Object.keys(countryCityData).map((c, i) => (
                                    <option key={i} value={c}>{c}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-800">
                                <HiChevronDown size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600 text-sm font-medium">
                            Address<span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your address here"
                            className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder-gray-400"
                        />
                    </div>

                    {/* Town/City and Postcode */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Town / City */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-600 text-sm font-medium">
                                Town / City<span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    className={`w-full appearance-none px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-700 ${!country ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    disabled={!country}
                                >
                                    <option value="">Select City</option>
                                    {cities.map((c, i) => (
                                        <option key={i} value={c}>{c}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                    <LuChevronDown className="text-gray-500 text-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Postcode */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-600 text-sm font-medium">
                                Postcode / ZIP<span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>

                    </div>

                </form>
            </div>
        </section>
    )
}

export default BillingDetails;
