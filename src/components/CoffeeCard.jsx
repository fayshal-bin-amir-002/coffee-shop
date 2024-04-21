import PropTypes from 'prop-types';
import { LuEye } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


const CoffeeCard = ({ coffee, handleDeleteCoffee }) => {

    const { _id, name, chef, price, photo } = coffee;

    

    return (
        <div className="card p-8 card-side bg-[#F5F4F1] rounded-lg shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <p className='text-xl'><span className='font-semibold'>Name: </span><span className='opacity-70'>{name}</span></p>
                <p className='text-xl'><span className='font-semibold'>Chef: </span><span className='opacity-70'>{chef}</span></p>
                <p className='text-xl'><span className='font-semibold'>Price: </span><span className='opacity-70'>{price} Taka</span></p>
            </div>
            <div className='flex flex-col justify-around pr-4'>
                <Link to={`/coffee-details/${_id}`}><button className='btn text-xl text-white bg-[#D2B48C]'><LuEye /></button></Link>
                <Link to={`/update-coffee/${_id}`}><button className='btn text-xl text-white bg-[#3C393B]'><FaPen /></button></Link>
                <button onClick={() => handleDeleteCoffee(_id)} className='btn text-xl text-white bg-[#EA4744]'><MdDelete /></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    handleDeleteCoffee: PropTypes.func.isRequired
};

export default CoffeeCard;