import "../../App.css";
import {Button} from "@mui/material";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";
import CreateEventBtn from "./CreateEventBtn/CreateEventBtn";
import EventCard from "./EventCard/EventCard";
const REACT_APP_URL = process.env.REACT_APP_URL;

export default function HomePage(props) {
  const {logOutUser} = useContext(UserContext);
  const {user} = useContext(UserContext);

  async function joinEvent(eventId) {
    try {
      const response = await fetch(`${REACT_APP_URL}events/${eventId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({userId: user.id}),
      });
      console.log(response);
      console.log(user.id);
      console.log(eventId);
      const data = await response.json();
      console.log(data + " joined event");
    } catch (error) {
      console.error("Error:", error);
    }
  }

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

  return (
    <>
      {/* <NavBar handleFilteredData={handleFilteredData} /> */}
      <Button variant='contained' onClick={logOut}>
        Logout
      </Button>
      <CreateEventBtn />
      <EventCard
        user={props.user}
        joinEvent={joinEvent}
        filteredData={props.filteredData}
      />
    </>
  );
}

// import CreateEventBtn from './CreateEventBtn/CreateEventBtn';
// import EventCard from './EventCard/EventCard';

// export default function HomePage(props) {
// 	return (
// 		<div>
// 		<CreateEventBtn/>
// 		<EventCard filteredData={props.filteredData} />
// 		</div>
// 	);
// }
