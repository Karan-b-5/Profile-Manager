import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from './ProfileContext';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    const { isAdmin, login } = useContext(ProfileContext);
  

  useEffect(() => {
    setUsername('admin')
    setPassword('admin')
  }, [])

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Implement actual login logic here 
    if (username === 'admin' && password === 'admin') { 
        login()
        navigate('/admin-dashboard'); 
    } 
    else { 
        alert('Invalid credentials'); 
    } 
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-teal-300 to-green-400">
      <div className="w-9/12 max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
