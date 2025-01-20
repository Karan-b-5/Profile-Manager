import loadGoogleMaps from "../utils/loadGoogleMaps";

 const geocodeAddress  = async (address) => {
    const apiKey = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'; // Replace with your actual Google API key
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
    const data = await response.json();
  
    if (data.status === 'OK') {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      console.log(data);
      
      throw new Error('Failed to fetch coordinates');
    }
  };

  const geocodeAddress2 = async (address) => {
    await loadGoogleMaps(); // Ensure Google Maps API is loaded
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {

        const location = results[0].geometry.location;
        // console.log(location.lat());
        const latitude = location.lat();
        const longitude = location.lng();
        // const coordinates: { lat: location.lat(), lng: location.lng() }
        
        return location;
        // setFormData((prevData) => ({
        //   ...prevData,
        //   location: { lat: location.lat(), lng: location.lng() }
        // }));
      } else {
        console.error("Geocode was not successful for the following reason: " + status);
      }
    });
  };


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
  
  