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
import axios from "axios";
import {LocationContext} from "./Components/CreateEventPage/AddEventForm/AddEventForm";
import {useContext} from "react";

// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_URL = process.env.REACT_APP_URL;

function App() {
  const {latitude, longitude} = useContext(LocationContext);

  console.log(latitude, longitude);

  // Defining states for filteredData and events
  const [filteredData, setFilteredData] = useState([]);
  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState(null);
  const [localEvents, setLocalEvents] = useState([]);

  console.log(location);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        console.log("fetching geolocation");
        const response = await axios.get(`${REACT_APP_URL}geolocation`);
        setLocation(response.data);
      } catch (error) {
        console.error("Error fetching geolocation", error);
      }
    };
    fetchGeolocation();
  }, []);

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

  const eventLocation = {
    latitude: latitude,
    longitude: longitude,
  };

  const userLocation = location;

  function haversineDistance(isMiles = false) {
    // Converts degrees to radians
    function toRad(x) {
      return (x * Math.PI) / 180;
    }

    // Radius of the Earth in kilometers
    const radius = 6371;

    // Differences in coordinates
    const x1 = eventLocation.latitude - userLocation.latitude;
    const dLat = toRad(x1);
    const x2 = eventLocation.longitude - userLocation.longitude;
    const dLon = toRad(x2);

    // Haversine formula
    const haversine =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(eventLocation.latitude)) *
        Math.cos(toRad(userLocation.longitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
    let diameter = radius * c;

    // Convert to miles if specified
    if (isMiles) diameter /= 1.60934;

    return diameter;
  }

  const maxDistance = 100;
  const nearbyEvents = events.filter((event) => {
    const distance = haversineDistance(userLocation, eventLocation);

    return distance <= maxDistance;
  });
  setLocalEvents(nearbyEvents);

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
