import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800 my-8 text-center">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <span className="text-xl text-gray-600 font-semibold">ID: </span>
              <span className="text-xl text-gray-800">{book.id}</span>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <span className="text-xl text-gray-600 font-semibold">Title: </span>
              <span className="text-xl text-gray-800">{book.title}</span>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <span className="text-xl text-gray-600 font-semibold">Author: </span>
              <span className="text-xl text-gray-800">{book.author}</span>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <span className="text-xl text-gray-600 font-semibold">Publish Year: </span>
              <span className="text-xl text-gray-800">{book.publishYear}</span>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <span className="text-xl text-gray-600 font-semibold">Created At: </span>
              <span className="text-xl text-gray-800">{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <span className="text-xl text-gray-600 font-semibold">Updated At: </span>
              <span className="text-xl text-gray-800">{new Date(book.updatedAt).toString()}</span>
            </div>
            <div className="flex justify-center gap-x-6 pt-4">
              <Link to={`/books/edit/${book._id}`}>
                <button className="bg-sky-800 hover:bg-sky-900 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 font-semibold">
                  Edit
                </button>
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 font-semibold">
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;