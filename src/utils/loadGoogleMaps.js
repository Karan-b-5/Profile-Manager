// utils/loadGoogleMaps.js
let googleMapsPromise;

const loadGoogleMaps = () => {
  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const API_KEY = 'YOUR_API_KEY'; // Replace with your Google Maps API key
    
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      resolve(window.google);
    };

    script.onerror = reject;
  });

  return googleMapsPromise;
};

export default loadGoogleMaps;
