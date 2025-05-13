import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

function Navbar() {
  const isLoggedIn = localStorage.getItem('user') !== null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Mail className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold text-white">AI Email Pro</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-yellow-500 px-3 py-2">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-yellow-500 px-3 py-2">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-yellow-500 px-3 py-2">Contact</Link>
            {!isLoggedIn ? (
              <>
                <Link to="/signin" className="text-gray-300 hover:text-yellow-500 px-3 py-2">Sign In</Link>
                <Link
                  to="/signup"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;