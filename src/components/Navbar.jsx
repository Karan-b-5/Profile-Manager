import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProfileContext } from './ProfileContext';

const Navbar = () => {
  const { isAdmin, logout } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLoginRedirect = () => {
    navigate('/admin-login');
  };

// via-purple-500
  return (
    <nav className="bg-[#a8edea] shadow-lg p-4 w-full top-0 z-50 border-b border-black">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-black text-2xl font-bold  hover:border-b border-black transition-all ease-in duration-300">
            Home
          </Link>
          <Link to="/profiles" className="text-black text-2xl font-bold hover:border-b transition-all ease-in border-black duration-300">
            Profile List
          </Link>
        </div>
        <div>
          {isAdmin ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 font-semibold py-2 rounded-md shadow-md transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLoginRedirect}
              className="bg-green-500 hover:bg-green-600 font-semibold text-white px-5 py-2 rounded-md shadow-md transition duration-300"
            >
              Login as Admin
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




