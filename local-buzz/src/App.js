import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserProvider} from "./contexts/user.context";
import HomePage from "../src/Components/HomePage/HomePage";
import LandingPage from "../src/Components/LandingPage/LandingPage";
import Login from "./Pages/Login.Page";
import PrivateRoute from "./Pages/PrivateRoute.Page";
import Signup from "./Pages/SignUp.Page";
import CreateEventPage from "./Components/CreateEventPage/CreateEventPage";
import ProfilePage from "./Components/ProfilePage/profilePage";
import NavBar from "./Components/NavBar/NavBar";
import {useEffect, useState} from "react";
import Map from "./Components/Map/Map";

// const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const REACT_APP_URL = process.env.REACT_APP_URL;

function App() {
  // Defining states for filteredData and events
  const [filteredData, setFilteredData] = useState([]);
  const [events, setEvents] = useState([]);
  // const [location, setLocation] = useState(null);
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);
  // const [nearbyEvents, setNearbyEvents] = useState([]);


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.log("Geolocation not supported");
}

function success(position) {
  console.log(position)
  setUserLat(position.coords.latitude)
  setUserLng(position.coords.longitude)
  // setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
  console.log(`Latitude: ${userLat}, Longitude: ${userLng}`);
 
}

function error() {
  console.log("Unable to retrieve your location");
}

  const fetchData = () => {
    fetch(`${REACT_APP_URL}events`)
    .then((response) => response.json())
    .then((data) => {
      setFilteredData(data);
      setEvents(data);
    })
    .catch((error) => console.error("Error:", error));
  };
  
  useEffect(() => {
    fetchData();
  }, []);
    
useEffect(() => {
    const userLocation = { latitude: userLat, longitude: userLng }

    function haversineDistance(event, userLocation, isMiles = false) {
      // Converts degrees to radians
      function toRad(x) {
        return (x * Math.PI) / 180;
      }

      // Radius of the Earth in kilometers
      let radius = 6371;

      // Differences in coordinates
      let x1 = event.latitude - userLocation.latitude;
      let dLat = toRad(x1);
      let x2 = event.longitude - userLocation.longitude;
      let dLon = toRad(x2);

      // Haversine formula
      let haversine =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(event.latitude)) *
          Math.cos(toRad(userLocation.longitude)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);

      let c = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
      let diameter = radius * c;
    
      // Convert to miles if specified
      if (isMiles) diameter /= 1.60934;

      return diameter;
    }

    const maxDistance = 900;
    const nearbyEvents = events.filter((event) => {
      const eventLocation = {
        latitude: Number(event.latitude),
        longitude: Number(event.longitude),
      };
      const distance = haversineDistance(eventLocation, userLocation);

      return distance <= maxDistance;
    });
   
    // Update the filteredData state with nearbyEvents
    setFilteredData(nearbyEvents);
  }, [events, userLat, userLng]);

  function handleFilteredData(event) {
    const inputValue = event.target.value;
    const filteredData = events.filter((event) =>
      event.title.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredData(filteredData);
  }

  async function addNewEvent(newEvent) {
    console.log("APP.JS LINE 68 ", newEvent);
    try {
      const response = await fetch(`${REACT_APP_URL}events`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newEvent),
      });
      const data = await response.json();
      console.log(data);
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <BrowserRouter>
      <UserProvider>
        <NavBar handleFilteredData={handleFilteredData} />
        <Routes>
          <Route
            exact
            path='/'
            element={<LandingPage filteredData={filteredData} />}
          />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route
              exact
              path='/homepage'
              element={<HomePage events={events} filteredData={filteredData} />}
            />
            <Route exact path='/Map' element={<Map userLng={userLng} userLat ={userLat} nearbyEvents={filteredData}/>} />
            <Route
              exact
              path='/createeventpage'
              element={<CreateEventPage addNewEvent={addNewEvent} />}
            />
            <Route exact path='/profilePage' element={<ProfilePage />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
