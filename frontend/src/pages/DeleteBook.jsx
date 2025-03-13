import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console');
        console.log(error);
      });
  };

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <BackButton />
      <h1 className="text-3xl font-bold text-gray-800 my-6 text-center">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Are you sure you want to delete this book?</h3>
        <button 
          className="p-4 bg-red-600 text-white m-8 w-full rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg active:transform active:scale-95" 
          onClick={handleDeleteBook}
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;