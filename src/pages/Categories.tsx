import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  GraduationCap,
  FlaskConical,
  Utensils,
  BookOpen,
  Trophy,
  Building2,
  Hotel,
  Heart,
  Navigation,
  MapPin,
} from 'lucide-react';
import { categories, locations } from '../data/mockData';

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const getCategoryIcon = (iconName: string, className = 'w-8 h-8') => {
    const icons: Record<string, JSX.Element> = {
      GraduationCap: <GraduationCap className={className} />,
      FlaskConical: <FlaskConical className={className} />,
      Utensils: <Utensils className={className} />,
      BookOpen: <BookOpen className={className} />,
      Trophy: <Trophy className={className} />,
      Building2: <Building2 className={className} />,
      Hotel: <Hotel className={className} />,
      Heart: <Heart className={className} />,
    };
    return icons[iconName] || <MapPin className={className} />;
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchParams({ category: categoryId });
  };

  const filteredLocations = selectedCategory
    ? locations.filter((loc) => loc.category_id === selectedCategory)
    : [];

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h1>
          <p className="text-lg text-gray-600">
            Find locations organized by type and department
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`p-6 rounded-lg shadow-md transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 hover:shadow-xl'
              }`}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 mx-auto mb-3 rounded-full ${
                  selectedCategory === category.id ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                }`}
              >
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
              <p
                className={`text-xs ${
                  selectedCategory === category.id ? 'text-blue-100' : 'text-gray-600'
                }`}
              >
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {selectedCategory && selectedCategoryData && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategoryData.name} Locations
              </h2>
              <p className="text-gray-600">
                {filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''}{' '}
                found
              </p>
            </div>

            {filteredLocations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
                  >
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {location.name}
                          </h3>
                          {location.is_featured && (
                            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 flex-shrink-0">
                          <MapPin className="w-6 h-6" />
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">{location.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span>{location.address}</span>
                        </div>
                        {location.floor_number !== undefined && (
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>Floor {location.floor_number}</span>
                          </div>
                        )}
                      </div>

                      <Link
                        to={`/navigate?destination=${location.id}`}
                        className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Get Directions</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No locations found
                </h3>
                <p className="text-gray-600">
                  There are no locations in this category yet.
                </p>
              </div>
            )}
          </div>
        )}

        {!selectedCategory && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Select a Category
            </h3>
            <p className="text-gray-600">
              Choose a category above to view all locations in that group
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
