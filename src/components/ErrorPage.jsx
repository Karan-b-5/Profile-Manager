import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-600 via-gray-700 to-gray-700 text-white">
      <div className="text-center p-8 bg-white bg-opacity-10 rounded-lg shadow-lg hover:border-2 border-black hover:scale-110 transition-all ease-in-out">
        <h1 className="text-6xl font-bold mb-4 hover:text-black transition-all ease-in">Oops!</h1>
        <p className="text-xl mb-8">Something went wrong. We couldn't find the page you were looking for.</p>
        <Link to="/">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transition-colors duration-200">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
