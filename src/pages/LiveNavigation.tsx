import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, Target, AlertCircle, MapPin as MapPinIcon } from 'lucide-react';
import { locations } from '../data/mockData';

if (typeof window !== 'undefined') {
  (window as never)['global'] = window;
}

delete (L.Icon.Default.prototype as never)['_getIconUrl'];
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LocationCoords {
  lat: number;
  lng: number;
}

function MapController({ center, zoom }: { center: LocationCoords; zoom: number }) {
  const map = useMap();

  useEffect(() => {
    map.setView([center.lat, center.lng], zoom);
  }, [center.lat, center.lng, zoom, map]);

  return null;
}

function RoutingControl({
  start,
  end,
  onRouteFound,
}: {
  start: LocationCoords;
  end: LocationCoords;
  onRouteFound: (distance: number, duration: number) => void;
}) {
  const map = useMap();
  const routingControlRef = useRef<never>(null);

  useEffect(() => {
    if (!map || !start || !end) return;

    const loadRouting = async () => {
      if (typeof window !== 'undefined') {
        await import('leaflet-routing-machine');
        const LRM = (window as never)['L'].Routing;

        if (routingControlRef.current) {
          map.removeControl(routingControlRef.current);
        }

        const control = LRM.control({
          waypoints: [L.latLng(start.lat, start.lng), L.latLng(end.lat, end.lng)],
          routeWhileDragging: false,
          addWaypoints: false,
          show: false,
          lineOptions: {
            styles: [{ color: '#3B82F6', weight: 5, opacity: 0.7 }],
          },
        });

        control.on('routesfound', (e: never) => {
          const routes = e.routes;
          const route = routes[0];
          onRouteFound(route.summary.totalDistance / 1000, route.summary.totalTime / 60);
        });

        control.addTo(map);
        routingControlRef.current = control;
      }
    };

    loadRouting();

    return () => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [map, start, end, onRouteFound]);

  return null;
}

export default function LiveNavigation() {
  const [searchParams] = useSearchParams();
  const destinationId = searchParams.get('destination');

  const [currentLocation, setCurrentLocation] = useState<LocationCoords | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    destinationId || null
  );
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [hasArrived, setHasArrived] = useState(false);
  const watchIdRef = useRef<number | null>(null);

  const destination = selectedDestination
    ? locations.find((loc) => loc.id === selectedDestination)
    : null;

  const centerLocation = currentLocation || { lat: 17.5439, lng: 78.5748 };

  useEffect(() => {
    if ('geolocation' in navigator) {
      setIsTracking(true);
      watchIdRef.current = navigator.geolocation.watchPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentLocation(newLocation);
          setError(null);

          if (destination) {
            const dist = calculateDistance(
              newLocation.lat,
              newLocation.lng,
              destination.latitude,
              destination.longitude
            );
            if (dist < 0.02 && !hasArrived) {
              setHasArrived(true);
              speak(`You have arrived at ${destination.name}`);
            }
          }
        },
        (err) => {
          setError('Unable to get your location. Please enable location services.');
          console.error(err);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, [destination, hasArrived]);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleRecenter = () => {
    if (currentLocation) {
      setError(null);
    }
  };

  const handleRouteFound = (dist: number, dur: number) => {
    setDistance(dist);
    setDuration(dur);
    if (destination) {
      speak(`Route found to ${destination.name}. Distance: ${dist.toFixed(1)} kilometers. Estimated time: ${Math.round(dur)} minutes.`);
    }
  };

  const handleDestinationSelect = (locId: string) => {
    setSelectedDestination(locId);
    setHasArrived(false);
    const loc = locations.find((l) => l.id === locId);
    if (loc) {
      speak(`Navigating to ${loc.name}`);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white shadow-md p-4 z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Navigation className="w-6 h-6 mr-2 text-blue-600" />
            Live Navigation
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Destination
              </label>
              <select
                value={selectedDestination || ''}
                onChange={(e) => handleDestinationSelect(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Choose a location...</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name} - {loc.address}
                  </option>
                ))}
              </select>
            </div>

            {destination && distance && duration && (
              <div className="flex gap-4">
                <div className="bg-blue-50 rounded-lg p-3 flex-1">
                  <p className="text-xs text-gray-600">Distance</p>
                  <p className="text-lg font-bold text-blue-600">{distance.toFixed(2)} km</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 flex-1">
                  <p className="text-xs text-gray-600">ETA</p>
                  <p className="text-lg font-bold text-green-600">{Math.round(duration)} min</p>
                </div>
              </div>
            )}
          </div>

          {hasArrived && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4 flex items-center">
              <Target className="w-5 h-5 text-green-600 mr-2" />
              <p className="text-sm text-green-800 font-semibold">
                You have arrived at {destination?.name}!
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 relative">
        <MapContainer
          center={[centerLocation.lat, centerLocation.lng]}
          zoom={17}
          className="h-full w-full"
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController center={centerLocation} zoom={17} />

          {currentLocation && (
            <Marker
              position={[currentLocation.lat, currentLocation.lng]}
              icon={
                new L.Icon({
                  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })
              }
            >
              <Popup>
                <strong>Your Location</strong>
              </Popup>
            </Marker>
          )}

          {destination && (
            <Marker
              position={[destination.latitude, destination.longitude]}
              icon={
                new L.Icon({
                  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })
              }
            >
              <Popup>
                <div className="text-center">
                  <strong className="text-lg">{destination.name}</strong>
                  <p className="text-sm text-gray-600 mt-1">{destination.address}</p>
                  <p className="text-xs text-gray-500 mt-2">{destination.description}</p>
                </div>
              </Popup>
            </Marker>
          )}

          {currentLocation && destination && (
            <RoutingControl
              start={currentLocation}
              end={{
                lat: destination.latitude,
                lng: destination.longitude,
              }}
              onRouteFound={handleRouteFound}
            />
          )}
        </MapContainer>

        <button
          onClick={handleRecenter}
          className="absolute bottom-20 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-[1000]"
          title="Recenter to your location"
        >
          <Target className="w-6 h-6 text-blue-600" />
        </button>

        {isTracking && (
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center z-[1000]">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-gray-700">Live Tracking</span>
          </div>
        )}
      </div>
    </div>
  );
}
