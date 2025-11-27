import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6 text-blue-400" />
            <div>
              <p className="font-semibold">VNR VJIET Smart Campus Navigation System</p>
              <p className="text-sm text-gray-400">Hyderabad, Telangana</p>
            </div>
          </div>
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>&copy; 2025 VNR VJIET. All rights reserved.</p>
            <p>Built for students, by students</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
