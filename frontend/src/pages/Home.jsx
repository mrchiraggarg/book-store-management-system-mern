import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../../components/home/BooksTable';
import BooksCard from '../../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen'>
      <div className='flex justify-center items-center gap-4 mb-8'>
        <button
          className={`${showType === 'card'
            ? 'bg-sky-600 text-white'
            : 'bg-sky-100 text-sky-600'
            } px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
        <button
          className={`${showType === 'table'
            ? 'bg-sky-600 text-white'
            : 'bg-sky-100 text-sky-600'
            } px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
      </div>
      <div className='flex justify-between items-center bg-white p-6 rounded-lg shadow-sm mb-8'>
        <h1 className='text-4xl font-bold text-gray-800'>Books Collection</h1>
        <Link to='/books/create' className='transition-transform hover:scale-110'>
          <MdOutlineAddBox className='text-sky-600 text-5xl hover:text-sky-700' />
        </Link>
      </div>
      <div className='bg-white rounded-lg shadow-sm p-6'>
        {loading ? (
          <div className='flex justify-center items-center min-h-[400px]'>
            <Spinner />
          </div>
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;