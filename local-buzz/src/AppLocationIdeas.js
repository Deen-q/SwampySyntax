// 💥💥💥💥💥💥💥💥💥
// WE NEED TO THINK ABOUT HOW WE ASK THE USERS PERMISSION TO KNOW THERE LOCATION AND HAVE A  PRIVACY STATEMENT ALONG THE LINES OF:
// WE WILL ONLY USE YOUR LOCATION TO FILTER EVENTS BASED ON YOUR LOCATION. WE WILL NOT SHARE YOUR LOCATION WITH ANYONE ELSE.  WE WILL NOT USE YOUR LOCATION FOR ANY OTHER PURPOSES. WE WILL NOT STORE YOUR LOCATION DATA.

// WE REALLY NEED TO SORT THIS BEFORE WE PROCEED WITH ANY LOCATION BASED FILTERING.
// 💥💥💥💥💥💥💥💥💥

// ✨✨✨✨✨✨

// This requires users to agree to location services and will need a back up plan for users who do not agree to location services.

// a) HTML5 Geolocation API: This is a standard feature of most modern web browsers, and does not require any external services or libraries. It provides fairly precise coordinates of the user's current location.

// function App() {
//  // State for user's location
//  const [location, setLocation] = useState({latitude: null, longitude: null});

//  // Function to get user's location
//  const getUserLocation = () => {
//    navigator.geolocation.getCurrentPosition(
//      position => {
//        setLocation({
//          latitude: position.coords.latitude,
//          longitude: position.coords.longitude
//        });
//      },
//      error => console.error(error),
//      { enableHighAccuracy: true }
//    );
//  };

//  useEffect(() => {
//    getUserLocation();
//  }, []);

// ✨✨✨✨✨✨

// b) REACT Geolocation API: This is a third-party library that provides a simple React hook to get the user's location. It is a wrapper around the HTML5 Geolocation API, and provides a more convenient way to access the user's location.
// read docs at this link: https://www.npmjs.com/package/react-geolocation

// ✨✨✨✨✨✨
// c) IP-based Services: These are services that estimate the user's location based on their IP address. They tend to be less accurate than GPS-based solutions, but do not require user permission and work even when GPS is not available. An example of such service is IP Geolocation API.

// import { useEffect, useState } from "react";
// // ...

// function App() {
//   const [location, setLocation] = useState({});

//   useEffect(() => {
//     fetch('http://ip-api.com/json/')
//       .then(response => response.json())
//       .then(data => setLocation({latitude: data.lat, longitude: data.lon}))
//       .catch(error => console.error("Error:", error));
//   }, []);

//   // ...
// }

// Note that this service provides an approximate location based on the user's IP address. It is not as accurate as GPS-based services, but it does not require user permission and works even if the user has GPS disabled.

// ✨✨✨✨✨✨

// d) Google Maps Geolocation API: This API from Google provides location data based on both IP and GPS data. It's a powerful tool, but it's not free and requires an API key. It also requires user permission to access GPS data.
// 💥💥💥💥💥 potentially this is not free and will cost us money to use.

// import { useEffect, useState } from "react";

// // ...

// API KEY IN ENV FILE
// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

// function App() {
// const [location, setLocation] = useState({});

// useEffect(() => {
//   navigator.geolocation.getCurrentPosition(async (position) => {
//     try {
//       const response = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY', {
//         method: 'POST'
//       });
//       if (!response.ok) {
//         throw new Error('Geolocation API response not ok');
//       }
//       const data = await response.json();
//       setLocation({latitude: data.location.lat, longitude: data.location.lng});
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   });
// }, []);

//   // ...
// }

// Replace 'YOUR_API_KEY' with your actual Google API key. This code fetches the user's geographic coordinates when the App component is first mounted.

// In this example, we first use the browser's Geolocation API to get the user's consent and then use Google's Geolocation API to get the user's location. Note that, unlike the browser's Geolocation API, Google's API can use data like nearby Wi-Fi networks to provide a location even when the device does not have a GPS sensor.

// ✨✨✨✨✨✨
// FILTERING EVENTS BASED ON LOCATION

// // The user's coordinates (latitude and longitude)
// const userLocation = { latitude: 40.7128, longitude: -74.0060 };

// // An array of event objects. Each event has an id, name, and coordinates.
// const events = [
//   { id: 1, name: 'Event 1', latitude: 40.7128, longitude: -74.0060 },
//   { id: 2, name: 'Event 2', latitude: 41.7128, longitude: -75.0060 },
//   // ... other events ...
// ];

// // The haversine formula is used to calculate the distance between two points
// // on the surface of a sphere (such as the Earth), given their latitudes and
// // longitudes. This function takes two sets of coordinates and returns the
// // distance between them in kilometers, or miles if isMiles is true.
// function haversineDistance(coords1, coords2, isMiles = false) {
//   // Converts degrees to radians
//   function toRad(x) {
//     return x * Math.PI / 180;
//   }

//   var lon1 = coords1.longitude;
//   var lat1 = coords1.latitude;

//   var lon2 = coords2.longitude;
//   var lat2 = coords2.latitude;

//   // Radius of the Earth in kilometers
//   var R = 6371;

//   // Differences in coordinates
//   var x1 = lat2 - lat1;
//   var dLat = toRad(x1);
//   var x2 = lon2 - lon1;
//   var dLon = toRad(x2);

//   // Haversine formula
//   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
//                   Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
//                   Math.sin(dLon/2) * Math.sin(dLon/2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   var d = R * c;

//   // Convert to miles if specified
//   if(isMiles) d /= 1.60934;

//   return d;
// }

// // Let's say we want to find events within 10 kilometers of the user
// const maxDistance = 10;

// // Filter the events based on their distance from the user
// const nearbyEvents = events.filter(event => {
//   // Create a location object for the event
//   const eventLocation = { latitude: event.latitude, longitude: event.longitude };

//   // Calculate the distance between the user and the event
//   const distance = haversineDistance(userLocation, eventLocation);

//   // Only include the event in the filtered list if it's within the max distance
//   return distance <= maxDistance;
// });

// This nearbyEvents array now contains all events that are within maxDistance kilometers of the user. You could then use this array to display the nearby events to the user.

// ✨✨✨✨✨✨
//CONVERT AN ADDRESS TO GEOGRAPHIC COORDINATES

// To convert an address into geographic coordinates (latitude and longitude), a process known as geocoding, you can use a geocoding service. Several providers offer this service, including Google Maps, Mapbox, and OpenStreetMap. For this example, let's use the Google Maps Geocoding API, which is a part of Google Cloud Platform services.

// Here's how you could do this using fetch in a React component:

// const address = '42 Baker Street, NW1 6XE';
// const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // replace with your API key

// // replace spaces with '+' for URL
// const urlAddress = address.replace(/ /g, '+');

// fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//         if (data.status === 'OK') {
//             const latitude = data.results[0].geometry.location.lat;
//             const longitude = data.results[0].geometry.location.lng;
//             // do something with latitude and longitude
//             console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//         } else {
//             throw new Error(`Geocode error: ${data.status}`);
//         }
//     })
//     .catch(error => console.error('Error:', error));

// Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key. Note that usage of the Google Maps Geocoding API is not free and requires enabling billing with a credit card and enabling the Geocoding API on the Google Cloud Platform.

// Remember that, as with all external services, the geocoding service may occasionally fail or be unavailable, so make sure to handle errors appropriately in your application. And, as always, respect user privacy and only use location data for purposes the user has consented to.

// DREAM BIG
//💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨💥✨

// now im think blue sky dreamer type stuff.
// is there a way to have a map with a pin that shows the users current location with the nearby events as other pins inside the search radius/

// ChatGPT
// Absolutely, that's entirely possible! Google Maps API also provides features for placing markers (pins) on the map, which you can use to indicate the user's location and the locations of the nearby events. Here's a simplified example using the Google Maps JavaScript API in a React component:

// Firstly, you need to include the Google Maps JavaScript API script in your HTML file:

// html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Simple Map</title>
//     <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
//   </head>
//   <body>
//     <div id="map"></div>
//   </body>
// </html>
// Replace 'YOUR_API_KEY' with your actual Google Maps API key.

// Then, in your React component:

// jsx
// import { useEffect } from 'react';

// function Map({ userLocation, nearbyEvents }) {
//   useEffect(() => {
//     // Initialize the map centered on the user's location
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       center: userLocation,
//       zoom: 10
//     });

//     // Create a marker for the user's location
//     new window.google.maps.Marker({
//       position: userLocation,
//       map,
//       title: 'Your location'
//     });

//     // Create a marker for each nearby event
//     nearbyEvents.forEach(event => {
//       new window.google.maps.Marker({
//         position: { lat: event.latitude, lng: event.longitude },
//         map,
//         title: event.name
//       });
//     });
//   }, [userLocation, nearbyEvents]);

//   return (
//     <div id="map" style={{ width: '100%', height: '400px' }} />
//   );
// }

// export default Map;
// You would use this Map component in your app like this:

// jsx
// <Map userLocation={userLocation} nearbyEvents={nearbyEvents} />

// This component takes the user's location and an array of nearby events as props, and it displays a map with markers for the user and each event. The user's location marker has a title of 'Your location', and each event marker has a title of the event's name.

// This is a simplified example. In a real application, you would want to add more error checking and handle edge cases, like when the Google Maps API is not loaded. Remember to handle API keys securely and not expose them in client-side code if possible.

// If you prefer to use a React-specific library for Google Maps, there are several available, such as @react-google-maps/api and google-maps-react. These libraries provide a more 'React-like' way of working with Google Maps and can be more flexible and easier to integrate into a React application.
