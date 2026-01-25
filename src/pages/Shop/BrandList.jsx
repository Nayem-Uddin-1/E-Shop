import React from 'react'

function BrandList({ prods }) {

    console.log("heiiii", prods);

    return (
        <>
            <h2 className="font-semibold mb-4 px-5  mt-5">Brand</h2>

            <div className="space-y-3 text-sm px-5 ">
                <label className="flex flex-col justify-center  ">
                    {
                        prods.map((item, i) => (
                            <div className="flex py-3 " >
                                <input type="checkbox" className="mr-2" />
                                <h3>
                                    {item.brand}

                                </h3>
                            </div>

                        ))

                    }
                    <span className="text-gray-400">+</span>
                </label>

            </div>
        </>
    )
}

export default BrandList