const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const newCoffee = { name, chef, supplier, taste, category, price, details, photo }; console.log(newCoffee);
    }

    return (
        <div className="container mx-auto">
            <section className="p-6 bg-[#F4F3F0] dark:text-gray-900 lg:px-28 lg:py-20">
                <form onSubmit={handleAddCoffee} className="container flex flex-col mx-auto">
                    <fieldset className="flex flex-col gap-6 p-6 rounded-md dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1 text-center">
                            <p className="font-medium text-5xl mb-8">Add New Coffee</p>
                            <p className="text-lg opacity-70 lg:w-[85%] mx-auto mb-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-xl opacity-80 font-semibold ">Name</label>
                                <input type="text" name="name" placeholder="Enter coffee name" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label   className="text-xl opacity-80 font-semibold ">supplier</label>
                                <input name="chef" type="text" placeholder="Enter coffee chef" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label   className="text-xl opacity-80 font-semibold ">Supplier</label>
                                <input name="supplier" type="text" placeholder="Enter coffee supplier" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label  className="text-xl opacity-80 font-semibold ">Taste</label>
                                <input name="taste" type="text" placeholder="Enter coffee taste" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label   className="text-xl opacity-80 font-semibold ">Category</label>
                                <input name="category" type="text" placeholder="Enter coffee category" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label   className="text-xl opacity-80 font-semibold ">Price</label>
                                <input name="price" type="text" placeholder="Enter coffee price" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-xl opacity-80 font-semibold ">Details</label>
                                <input name="details" type="text" placeholder="Enter coffee details" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-xl opacity-80 font-semibold ">Photo</label>
                                <input name="photo" type="text" placeholder="Enter photo url" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full mt-6">
                                <button className="py-3 bg-[#D2B48C] w-full rounded text-lg font-semibold">Add Coffee</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddCoffee;