let googleMapsPromise: Promise<void> | null = null;

export const loadGoogleMaps = (): Promise<void> => {
  if (!googleMapsPromise) {
    googleMapsPromise = new Promise<void>((resolve, reject) => {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      console.log('Google Maps API Key:', apiKey); // Remove this line in production
      if (!apiKey) {
        reject(new Error('Google Maps API key is not set'));
        return;
      }
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps API'));
      document.head.appendChild(script);
    });
  }
  return googleMapsPromise;
};