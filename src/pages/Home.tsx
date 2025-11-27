import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Navigation,
  Map,
  Building2,
  FlaskConical,
  Utensils,
  BookOpen,
  Trophy,
  Hotel,
  Clock,
  Users,
  Search,
  MapPin,
  GraduationCap,
} from 'lucide-react';
import { locations, categories } from '../data/mockData';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredLocations = locations.filter((loc) => loc.is_featured);
  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      GraduationCap: <GraduationCap className="w-6 h-6" />,
      FlaskConical: <FlaskConical className="w-6 h-6" />,
      Utensils: <Utensils className="w-6 h-6" />,
      BookOpen: <BookOpen className="w-6 h-6" />,
      Trophy: <Trophy className="w-6 h-6" />,
      Building2: <Building2 className="w-6 h-6" />,
      Hotel: <Hotel className="w-6 h-6" />,
      Heart: <MapPin className="w-6 h-6" />,
    };
    return icons[iconName] || <MapPin className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Navigate Your Campus With Ease
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Find your way around VNR VJIET using our smart interactive navigation system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/navigate"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Navigation className="w-5 h-5" />
                <span>Start Live Navigation</span>
              </Link>
              <Link
                to="/categories"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Map className="w-5 h-5" />
                <span>Explore Campus</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">15+ Buildings</h3>
            <p className="text-gray-600">Complete coverage of all campus facilities</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Categories</h3>
            <p className="text-gray-600">Organized by department and facility type</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7 Available</h3>
            <p className="text-gray-600">Access navigation anytime, anywhere</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Use Our System?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mb-4">
              <Navigation className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time GPS</h3>
            <p className="text-gray-600">Live location tracking with turn-by-turn directions</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-4">
              <Map className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Maps</h3>
            <p className="text-gray-600">Detailed campus maps with all key locations</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mb-4">
              <Search className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Search</h3>
            <p className="text-gray-600">Quickly find any building or facility</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg mb-4">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Friendly</h3>
            <p className="text-gray-600">Simple interface for all users</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find Your Destination
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for buildings, departments, facilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          {searchQuery && (
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
              {filteredLocations.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {filteredLocations.slice(0, 5).map((location) => (
                    <Link
                      key={location.id}
                      to={`/navigate?destination=${location.id}`}
                      className="block p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{location.name}</h3>
                          <p className="text-sm text-gray-600">{location.address}</p>
                        </div>
                        <Navigation className="w-5 h-5 text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-600">No locations found</div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories?category=${category.id}`}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all transform hover:scale-105 flex flex-col items-center text-center space-y-3"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full text-blue-600">
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
              <p className="text-xs text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLocations.map((location) => (
              <Link
                key={location.id}
                to={`/navigate?destination=${location.id}`}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{location.name}</h3>
                <p className="text-sm text-gray-300 mb-3">{location.description}</p>
                <div className="flex items-center text-sm text-blue-300">
                  <Navigation className="w-4 h-4 mr-1" />
                  <span>Get Directions</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
