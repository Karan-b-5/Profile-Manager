import React, { useEffect, useRef } from 'react';
import loadGoogleMaps from '../utils/loadGoogleMaps';

const MapComponent = ({ profile }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    loadGoogleMaps()
      .then((google) => {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: parseFloat(profile.location.lat), lng: parseFloat(profile.location.lng) },
          zoom: 8,
        });

        new google.maps.Marker({
          position: { lat: parseFloat(profile.location.lat), lng: parseFloat(profile.location.lng) },
          map: map,
          title: profile.name,
        });
      })
      .catch((error) => {
        console.error("Google Maps API failed to load: ", error);
      });
  }, [profile]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
