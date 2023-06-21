import {BrowserRouter, Route, Routes, useResolvedPath} from "react-router-dom";
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

// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_URL = process.env.REACT_APP_URL;

function App() {
  // Defining states for filteredData and events
  const [filteredData, setFilteredData] = useState([]);
  const [events, setEvents] = useState([]);
  // const [location, setLocation] = useState(null);

  //   useEffect(() => {
  //     const fetchGeolocation = async () => {
  //       try {
  //         const response = await axios.post(`${URL}geolocate`);
  //         setLocation(response.data);
  //         console.log({ location });
  //       } catch (error) {
  //         console.error("Error fetching geolocation", error);
  //       }
  //     };
  //     fetchGeolocation();
  //   }, []);

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

  // Function to handle filtered data
  function handleFilteredData(event) {
    const inputValue = event.target.value;
    const filteredData = events.filter((event) =>
      event.title.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredData(filteredData);
  }
  // this is where we need to make a POST request to the server
  // to add the new event to the database
  // and then update the events state with the new event

  async function addNewEvent(newEvent) {
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
      {/* We are wrapping our whole app with UserProvider so that */}
      {/* our user is accessible through out the app from any page*/}
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
          {/* We are protecting our Home Page from unauthenticated */}
          {/* users by wrapping it with PrivateRoute here. */}
          <Route element={<PrivateRoute />}>
            <Route
              exact
              path='/homepage'
              element={
                <HomePage
                  // user={user}
                  // joinEvent={joinEvent}
                  filteredData={filteredData}
                />
              }
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
