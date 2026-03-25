function CategoryList({ prods, selectedCategories, setSelectedCategories }) {

    const uniqueCategories = [];

    prods.forEach((product) => {
        product.categories.forEach((category) => {
            if (!uniqueCategories.includes(category)) {
                uniqueCategories.push(category);
            }
        });
    });

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div>
            <h2 className="font-semibold mb-4 px-5">Product categories</h2>

            <div className="space-y-3 text-sm px-5">
                {
                    uniqueCategories.map((item, i) => (
                        <div key={i} className="flex py-3">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={selectedCategories.includes(item)}
                                onChange={() => handleCategoryChange(item)}
                            />
                            <h3>{item}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


export default CategoryList