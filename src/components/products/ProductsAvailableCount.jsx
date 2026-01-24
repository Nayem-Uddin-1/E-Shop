import React from 'react'

function ProductsAvailableCount({available}) {
    
    const total = 30

    const percentage = Math.min((available / total) * 100, 100);
    return (
        <div className="w-full max-w-xs mt-5">
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm font-medium">
                    Products Available
                </span>
                <span className="text-gray-800 text-lg font-bold">
                    {available}
                </span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full bg-gray-100 rounded-full h-1.5">
                {/* Progress Fill */}
                <div
                    className="bg-orange-400 h-1.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    )
}

export default ProductsAvailableCount