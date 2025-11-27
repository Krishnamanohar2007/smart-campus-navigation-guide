import {
  Navigation,
  MapPin,
  Volume2,
  Smartphone,
  Info,
  Users,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & About</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about using the VNR VJIET Smart Campus Navigator
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                <Info className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">About This System</h2>
            </div>
            <div className="prose prose-blue">
              <p className="text-gray-600 leading-relaxed">
                The VNR VJIET Smart Campus Navigator is an innovative web application designed
                to help students, faculty, and visitors easily navigate the campus of VNR Vignana
                Jyothi Institute of Engineering and Technology in Hyderabad. Using real-time GPS
                tracking and interactive maps, the system provides turn-by-turn navigation to
                any building or facility on campus.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                This project was built to solve the common problem of new students and visitors
                getting lost on campus, especially during their first few weeks. With over 15
                buildings and numerous facilities, finding your way can be challenging - but not
                anymore!
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                <Navigation className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How to Use Live Navigation</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Enable Location Services</h3>
                  <p className="text-gray-600">
                    When prompted, allow the website to access your location. This is required
                    for real-time navigation and tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Select Your Destination</h3>
                  <p className="text-gray-600">
                    Choose where you want to go from the dropdown menu. You can select any
                    building, department, or facility on campus.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Follow the Route</h3>
                  <p className="text-gray-600">
                    A blue route will appear on the map showing the path to your destination. The
                    blue marker shows your current location, and the red marker shows your
                    destination.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Listen to Voice Guidance</h3>
                  <p className="text-gray-600">
                    The system will announce directions and notify you when you arrive at your
                    destination. Make sure your device volume is turned up.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                <Volume2 className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Voice Guidance</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  Voice announcements will tell you when a route is found, including distance and
                  estimated time
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  You'll receive an arrival notification when you're within 20 meters of your
                  destination
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">
                  Voice guidance works on all modern browsers that support the Web Speech API
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mr-4">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Permissions Required</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Location Access</h3>
                    <p className="text-sm text-blue-800">
                      Required for real-time tracking and navigation. Your location is only used
                      within this application and is never stored or shared.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Volume2 className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-1">Audio Playback</h3>
                    <p className="text-sm text-purple-800">
                      Required for voice guidance and navigation announcements. You can mute your
                      device if you prefer silent navigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mr-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Troubleshooting</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Location not working?
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                  <li>Check that location services are enabled on your device</li>
                  <li>Make sure you've granted permission to the website</li>
                  <li>Try refreshing the page</li>
                  <li>Ensure you have a stable internet connection</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Voice guidance not working?
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                  <li>Check your device volume settings</li>
                  <li>Ensure your browser supports the Web Speech API</li>
                  <li>Try using a different browser (Chrome or Edge recommended)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Map not loading?
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                  <li>Check your internet connection</li>
                  <li>Clear your browser cache and reload</li>
                  <li>Try a different browser</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-md p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Developer Credits</h2>
            </div>
            <div className="prose prose-blue">
              <p className="text-blue-100 leading-relaxed">
                This Smart Campus Navigator was developed as a student project to improve campus
                navigation and accessibility for the VNR VJIET community. The system uses modern
                web technologies including React, Leaflet, OpenStreetMap, and the browser's
                Geolocation API.
              </p>
              <p className="text-blue-100 leading-relaxed mt-4">
                <strong className="text-white">Purpose:</strong> To help new students, visitors,
                and faculty easily navigate the campus using real-time GPS tracking and
                interactive maps.
              </p>
              <p className="text-blue-100 leading-relaxed mt-4">
                <strong className="text-white">Technology Stack:</strong> React, TypeScript,
                TailwindCSS, React Router, Leaflet, React-Leaflet, OpenStreetMap, Geolocation
                API, Web Speech API
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
