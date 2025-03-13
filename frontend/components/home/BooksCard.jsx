import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksCard = ({ books }) => {
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => (
                <div class="bg-white shadow-md rounded-lg p-4">
                    <div key={book._id} className="border-2 border-gray-500 rounded-lg p-4 relative hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                        <h2 className="absolute top-2 right-2 px-4 py-1 bg-red-300 rounded-lg font-semibold text-gray-800 shadow-sm">{book.publishYear}</h2>
                        <div className="flex flex-col space-y-4 mt-8 flex-grow">
                            <div className="flex items-center gap-x-3">
                                <PiBookOpenTextLight className="text-red-400 text-2xl" />
                                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{book.title}</h2>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <BiUserCircle className="text-red-400 text-2xl" />
                                <h2 className="text-md text-gray-700 line-clamp-1">{book.author}</h2>
                            </div>
                            <div className="flex justify-center items-center gap-x-6 mt-auto pt-4 border-t border-gray-200">
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors duration-200" />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition-colors duration-200" />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-200" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    );
};

export default BooksCard;