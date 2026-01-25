import React from 'react'
import { useSelector } from 'react-redux';

function CategoryList({ prods, selectedCategories, setSelectedCategories }) {






    const uniqueCategories = [];

    prods.forEach((product) => {

        product.categories.forEach((category) => {

            if (!uniqueCategories.includes(category)) {
                uniqueCategories.push(category);
            }
        });
    });

    return (

        <div>
              <h2 className="font-semibold mb-4 px-5">Product categories</h2>
               <div className="space-y-3 text-sm px-5 ">
            <label className="flex flex-col justify-center  ">
                {
                    uniqueCategories.map((item, i) => (
                        <div className="flex py-3 " >
                            <input type="checkbox" className="mr-2" />
                            <h3>
                                {item}

                            </h3>
                        </div>

                    ))

                }
                <span className="text-gray-400">+</span>
            </label>

        </div>
    
        </div>
       )
}

export default CategoryList