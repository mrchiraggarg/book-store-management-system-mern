import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2 bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
      <thead className='bg-gradient-to-r from-gray-100 to-gray-200'>
        <tr>
          <th className='border border-slate-300 rounded-md px-4 py-4 text-center text-gray-700 font-bold'>No</th>
          <th className='border border-slate-300 rounded-md px-4 py-4 text-center text-gray-700 font-bold'>Title</th>
          <th className='border border-slate-300 rounded-md px-4 py-4 text-center text-gray-700 font-bold max-md:hidden'>Author</th>
          <th className='border border-slate-300 rounded-md px-4 py-4 text-center text-gray-700 font-bold max-md:hidden'>Publish Year</th>
          <th className='border border-slate-300 rounded-md px-4 py-4 text-center text-gray-700 font-bold'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-16 hover:bg-gray-50 transition-all duration-200 hover:transform hover:scale-[1.01]'>
            <td className='border border-slate-300 rounded-md text-center text-gray-600'>{index + 1}</td>
            <td className='border border-slate-300 rounded-md px-4 py-2 text-center text-gray-800 font-medium'>{book.title}</td>
            <td className='border border-slate-300 rounded-md px-4 py-2 text-center text-gray-600 max-md:hidden'>{book.author}</td>
            <td className='border border-slate-300 rounded-md px-4 py-2 text-center text-gray-600 max-md:hidden'>{book.publishYear}</td>
            <td className='border border-slate-300 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`} className='hover:scale-125 transition-transform duration-200'>
                  <BsInfoCircle className='text-2xl text-green-600 hover:text-green-700' />
                </Link>
                <Link to={`/books/edit/${book._id}`} className='hover:scale-125 transition-transform duration-200'>
                  <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`} className='hover:scale-125 transition-transform duration-200'>
                  <MdOutlineDelete className='text-2xl text-red-500 hover:text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;