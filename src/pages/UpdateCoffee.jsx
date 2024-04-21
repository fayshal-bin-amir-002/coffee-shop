import { useLoaderData } from "react-router-dom";
import GoHome from "../components/GoHome";
import { toast } from "react-toastify";

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, chef, price, photo, supplier, taste, category, details } = coffee;

    const handleUpdateCoffee = (e) => {
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

        const updatedCoffee = { name, chef, supplier, taste, category, price, details, photo };

        fetch(`http://localhost:3200/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount === 1) {
                    toast.success('Coffee updated successfully');
                }
            })
    }

    return (
        <div className="container mx-auto">
            <GoHome></GoHome>
            <section className="p-6 bg-[#F4F3F0] dark:text-gray-900 lg:px-28 lg:py-20">
                <form onSubmit={handleUpdateCoffee} className="container flex flex-col mx-auto">
                    <fieldset className="flex flex-col gap-6 p-6 rounded-md dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1 text-center">
                            <p className="font-medium text-5xl mb-8">Update Coffee</p>
                            <p className="text-lg opacity-70 lg:w-[85%] mx-auto mb-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-xl opacity-80 font-semibold ">Name</label>
                                <input type="text" defaultValue={name} name="name" placeholder="Enter coffee name" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-xl opacity-80 font-semibold ">Chef</label>
                                <input name="chef" defaultValue={chef} type="text" placeholder="Enter coffee chef" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-xl opacity-80 font-semibold ">Supplier</label>
                                <input name="supplier" defaultValue={supplier} type="text" placeholder="Enter coffee supplier" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-xl opacity-80 font-semibold ">Taste</label>
                                <input name="taste" defaultValue={taste} type="text" placeholder="Enter coffee taste" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-xl opacity-80 font-semibold ">Category</label>
                                <input name="category" defaultValue={category} type="text" placeholder="Enter coffee category" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-xl opacity-80 font-semibold ">Price</label>
                                <input name="price" defaultValue={price} type="text" placeholder="Enter coffee price" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-xl opacity-80 font-semibold ">Details</label>
                                <input name="details" defaultValue={details} type="text" placeholder="Enter coffee details" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-xl opacity-80 font-semibold ">Photo</label>
                                <input name="photo" defaultValue={photo} type="text" placeholder="Enter photo url" className="w-full p-3 mt-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:ring-[#D2B48C] focus:outline-none dark:border-gray-300" />
                            </div>
                            <div className="col-span-full mt-6">
                                <button className="py-3 bg-[#D2B48C] w-full rounded text-lg font-semibold">Update Coffee</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default UpdateCoffee;