import React, { useEffect, useRef, useState } from 'react';
import { loadGoogleMaps } from '../utils/googleMapsLoader';

// ... (keep the existing code)

const GoogleMap: React.FC<GoogleMapProps> = ({ selectedActivities }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        await loadGoogleMaps();
        if (mapRef.current && !mapInstanceRef.current) {
          const mapOptions: google.maps.MapOptions = {
            center: { lat: 7.8731, lng: 80.7718 },
            zoom: 7,
          };
          mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions);
        }
        updateMarkers();
      } catch (error) {
        console.error('Failed to initialize Google Maps:', error);
        setError('Failed to load Google Maps. Please check your API key and try again.');
      }
    };

    initMap();
  }, []);

  // ... (keep the existing updateMarkers function)

  if (error) {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline"> {error}</span>
    </div>;
  }

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;