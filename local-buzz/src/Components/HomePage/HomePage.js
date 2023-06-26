import '../../App.css';
import './HomePage.css';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import CreateEventBtn from './CreateEventBtn/CreateEventBtn';
import EventCard from './EventCard/EventCard';
import { useNavigate } from "react-router-dom";

const REACT_APP_URL = process.env.REACT_APP_URL;

export default function HomePage(props) {
	const navigate = useNavigate();
	const { logOutUser } = useContext(UserContext);
	const { user } = useContext(UserContext);
	// console.log(user);

	async function joinEvent(eventId) {
		try {
			const response = await fetch(`${REACT_APP_URL}events/${eventId}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ userId: user.id }),
				//if the event with the eventid has the user already in it.
			});
			// console.log(response + "this response");
			const data = await response.json();
			console.log(data)
		} catch (error) {
			console.error('Error:', error);
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
				navigate("/");
			}
		} catch (error) {
			alert(error);
		}
	};

	
		

  return (
    <>
	<div className="header-container">
      {/* <NavBar handleFilteredData={handleFilteredData} /> */}
      <h1 className='hello-name'>Hello ${"name"}
	  <Button variant='contained' onClick={logOut} sx={{
		backgroundColor: '#5aaaa6',
		borderRadius: '25px',
		border: '1px solid #47474782',
		padding: '0.1rem 0.8rem',
		color: 'white',
		textTransform: 'capitalize',
		fontSize: '0.8rem',
		fontWeight: 'bold',
		maxWidth: '100rem',
		maxHeight: '30px',
		marginLeft: '3rem',
		}}>
        Logout
      </Button>
	
	  </h1>
	  </div> 
      <p className='welcome-member'>
        Welcome to the community! Let's explore some more.
      </p>
	 
      <EventCard
        events={props.events}
        user={user}
        joinEvent={joinEvent}
        filteredData={props.filteredData}
      />
      <CreateEventBtn />
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
