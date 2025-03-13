import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setPublishYear(book.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console');
        console.log(error);
      })
  }

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <BackButton />
      <h1 className="text-4xl font-bold text-center text-gray-800 my-8">Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl shadow-lg w-[600px] p-8 mx-auto bg-white">
        <div className="my-4">
          <label className="text-xl font-semibold block mb-2 text-gray-700">Title</label>
          <input 
            type="text" 
            className="w-full border-2 border-sky-400 rounded-lg p-3 focus:outline-none focus:border-sky-600 transition duration-200" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold block mb-2 text-gray-700">Author</label>
          <input 
            type="text" 
            className="w-full border-2 border-sky-400 rounded-lg p-3 focus:outline-none focus:border-sky-600 transition duration-200" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold block mb-2 text-gray-700">Publish Year</label>
          <input 
            type="text" 
            className="w-full border-2 border-sky-400 rounded-lg p-3 focus:outline-none focus:border-sky-600 transition duration-200" 
            value={publishYear} 
            onChange={(e) => setPublishYear(e.target.value)} 
          />
        </div>
        <button 
          className="p-3 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition duration-200 mt-6 transform hover:scale-105"
          onClick={handleSaveBook}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditBook;