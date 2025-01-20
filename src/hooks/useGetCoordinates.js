import loadGoogleMaps from "../utils/loadGoogleMaps";


export const useGetCoordinates = async (address) => {
    await loadGoogleMaps(); // Ensure Google Maps API is loaded
    return new Promise((resolve, reject) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;
          resolve({
            lat: location.lat(),
            lng: location.lng(),
          });
        } else {
          reject("Geocode was not successful for the following reason: " + status);
        }
      });
    });
  };
  
  