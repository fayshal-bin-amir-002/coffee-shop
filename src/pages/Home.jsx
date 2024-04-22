import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { toast } from "react-toastify";

const Home = () => {

    const loadedCoffee = useLoaderData();

    const [coffees, setCoffees] = useState(loadedCoffee);

    const handleDeleteCoffee = (id) => {
        fetch(`https://coffee-store-server-theta-ten.vercel.app/coffee/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const remaining = coffees.filter((coffee) => coffee._id !== id);
                    setCoffees(remaining);
                    toast.success('Coffee deleted successfully');
                }
            })
    }

    return (
        <div className="container mx-auto">
            <div className="text-center">
                <h1 className="font-semibold text-4xl mb-5">Our Popular Products</h1>
                <Link to="/add-coffee"><button className="btn bg-[#E3B577] text-white mb-12">Add Coffee</button></Link>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {
                    coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} handleDeleteCoffee={handleDeleteCoffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;