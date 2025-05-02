import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
              TASK TRACKER
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Login
            </Link>
            <Link to="/signup" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 