import "../App.css";
import { useEffect, useState } from "react";
import { eventData } from "../Components/Data/EventData";
import NavBar from "../Components/NavBar/NavBar";
import HomePage from "../Components/HomePage/HomePage";
import CreateEventPage from "../Components/CreateEventPage/CreateEventPage";
import { Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/user.context";

export default function Home() {
  const { logOutUser } = useContext(UserContext);

  // This function is called when the user clicks the "Logout" button.
  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser();
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
      if (loggedOut) {
        window.location.reload(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  // Defining states for filteredData and events
  const [filteredData, setFilteredData] = useState([]);
  const [events, setEvents] = useState([...eventData]);

  const fetchData = () => {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => setFilteredData(data))
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

  // Function to add new event
  function addNewEvent(newEvent) {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setFilteredData(updatedEvents);
  }

  return (
    <>
      <Button variant="contained" onClick={logOut}>
        Logout
      </Button>

      <NavBar handleFilteredData={handleFilteredData} />
      <Routes>
        <Route path="/" element={<HomePage filteredData={filteredData} />} />
        <Route
          path="/createeventpage"
          element={<CreateEventPage addNewEvent={addNewEvent} />}
        />
      </Routes>
    </>
  );
}
