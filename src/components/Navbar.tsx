import { Link, useLocation } from 'react-router-dom';
import { MapPin, Home, Compass, Grid3x3, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900">VNR VJIET</span>
              <span className="text-xs text-gray-600">Campus Navigator</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/navigate"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/navigate')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Live Navigation</span>
            </Link>
            <Link
              to="/categories"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/categories')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              <span>Categories</span>
            </Link>
            <Link
              to="/help"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/help')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Help</span>
            </Link>
          </div>

          <div className="md:hidden flex space-x-4">
            <Link
              to="/"
              className={`p-2 rounded-md ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link
              to="/navigate"
              className={`p-2 rounded-md ${
                isActive('/navigate') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              <Compass className="w-5 h-5" />
            </Link>
            <Link
              to="/categories"
              className={`p-2 rounded-md ${
                isActive('/categories') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </Link>
            <Link
              to="/help"
              className={`p-2 rounded-md ${
                isActive('/help') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              <HelpCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
