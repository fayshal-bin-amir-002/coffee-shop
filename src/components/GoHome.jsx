import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const GoHome = () => {
    return (
        <div className="container mx-auto py-12">
            <Link to="/"><button className="btn"><FiArrowLeft /> Back to Home</button></Link>
        </div>
    );
};

export default GoHome;