import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from './ProfileContext';
import useGenerateProfiles from '../hooks/useGenerateProfiles';

const Home = () => {
    const { profiles, setProfiles } = useContext(ProfileContext);
    
    useEffect(() => { 
        const data = useGenerateProfiles(10); // Generate 10 dummy profiles 
        setProfiles(data); 
    }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-teal-300 to-green-400">
      <div className="text-center border-2 border-black p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transform transition hover:scale-105 w-9/12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Profile Manager</h1>
        <p className="text-xl text-gray-700 mb-8">Manage and explore user profiles with ease. Start by browsing profiles or log in as an administrator to have full access.</p>
        <div className="space-x-4 space-y-4">
          <Link to="/profiles" className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition-colors duration-200">
            View Profiles
          </Link>
          <Link to="/admin-login" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition-colors duration-200">
            Login as Administrator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
