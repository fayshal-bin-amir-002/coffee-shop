import { useLoaderData } from "react-router-dom";
import GoHome from "../components/GoHome";

const CoffeeDetails = () => {

    const coffee = useLoaderData();
    
    const { name, chef, price, photo, supplier, taste, category, details } = coffee;

    return (
        <div className="container mx-auto">
            <GoHome></GoHome>
            <div>
                <div className="card p-8 card-side bg-[#F5F4F1] rounded-lg shadow-xl w-[1100px] mx-auto justify-around">
                    <figure><img src={photo} alt="Movie" className="w-[350px]" /></figure>
                    <div className="card-body flex-grow-0">
                        <p className='text-xl'><span className='font-semibold'>Name: </span><span className='opacity-70'>{name}</span></p>
                        <p className='text-xl'><span className='font-semibold'>Chef: </span><span className='opacity-70'>{chef}</span></p>
                        <p className='text-xl'><span className='font-semibold'>Price: </span><span className='opacity-70'>{price} Taka</span></p>
                        <p className='text-xl'><span className='font-semibold'>Supplier: </span><span className='opacity-70'>{supplier}</span></p>
                        <p className='text-xl'><span className='font-semibold'>Taste: </span><span className='opacity-70'>{taste}</span></p>
                        <p className='text-xl'><span className='font-semibold'>Category: </span><span className='opacity-70'>{category}</span></p>
                        <p className='text-xl'><span className='font-semibold'>Details: </span><span className='opacity-70'>{details}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;