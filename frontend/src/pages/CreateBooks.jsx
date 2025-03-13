import React, { useState } from 'react';
import axios from 'axios';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true);
    axios.post('http://localhost:5555/books', data)
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
      <h1 className="text-4xl font-bold text-center text-gray-800 my-8">Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="my-4">
          <label className="text-xl font-semibold block mb-2 text-gray-700">Title</label>
          <input 
            type="text" 
            className="w-full border-2 border-sky-400 rounded-lg p-3 focus:outline-none focus:border-sky-600 transition-colors duration-300" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter book title"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold block mb-2 text-gray-700">Author</label>
          <input 
            type="text" 
            className="w-full border-2 border-sky-400 rounded-lg p-3 focus:outline-none focus:border-sky-600 transition-colors duration-300" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            placeholder="Enter author name"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold block mb-2 text-gray-700">Publish Year</label>
          <input 
            type="text" 
            className="w-full border-2 border-sky-400 rounded-lg p-3 focus:outline-none focus:border-sky-600 transition-colors duration-300" 
            value={publishYear} 
            onChange={(e) => setPublishYear(e.target.value)} 
            placeholder="Enter publish year"
          />
        </div>
        <button 
          className="p-3 bg-sky-500 text-white font-bold rounded-lg mt-8 hover:bg-sky-600 transform hover:scale-105 transition-all duration-300"
          onClick={handleSaveBook}
        >
          Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;