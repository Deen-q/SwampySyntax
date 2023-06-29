import { useEffect, useRef } from "react";

const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function Map({ userLat, userLng, nearbyEvents }) {
 
 const mapRef = useRef();
 
 useEffect(() => {
  const userLocation = { lat: userLat, lng: userLng };

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
       // label: "Your location",
      });
      
      // Create a marker for each nearby event
      nearbyEvents.forEach((event) => {
       const image =
     "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        new window.google.maps.Marker({
          position: { lat: Number(event.latitude), lng: Number(event.longitude) },
          map: initMap,
          icon: image,
          // label: event.title,
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
  }, [nearbyEvents, userLat, userLng]);

  return <div ref={mapRef} style={{ width: "100%", height: "800px" }} />;
}

export default Map;