import { useEffect, useRef } from "react";

const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function Map({ userLocation, nearbyEvents }) {
 console.log(nearbyEvents)
  const mapRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_API_KEY}`;
    script.onload = () => {
      // Initialize the map centered on the user's location
      const initMap = new window.google.maps.Map(mapRef.current, {
        center: userLocation,
        zoom: 10,
      });

      // Create a marker for the user's location
      new window.google.maps.Marker({
        position: userLocation,
        map: initMap,
        title: "Your location",
      });

      // Create a marker for each nearby event
      nearbyEvents.forEach((event) => {
        new window.google.maps.Marker({
          position: { lat: Number(event.latitude), lng: Number(event.longitude) },
          map: initMap,
          title: event.name,
        });
      });

     };
     script.onerror = () => {
      console.error('Error loading Google Maps API.');
    };
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [userLocation, nearbyEvents]);

  return <div ref={mapRef} style={{ width: "100%", height: "800px" }} />;
}

export default Map;