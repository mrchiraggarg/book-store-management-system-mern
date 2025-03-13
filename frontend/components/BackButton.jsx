import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
    return (
        <div className="flex items-center">
            <Link 
                to={destination} 
                className="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded-lg w-fit transition-colors duration-300 flex items-center shadow-md hover:shadow-lg"
            >
                <BsArrowLeft className="text-2xl mr-1" />
            </Link>
        </div>
    );
};

export default BackButton;