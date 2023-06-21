import '../../App.css';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import CreateEventBtn from './CreateEventBtn/CreateEventBtn';
import EventCard from './EventCard/EventCard';

export default function HomePage(props) {
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

	return (
		<>
			{/* <NavBar handleFilteredData={handleFilteredData} /> */}
			<Button variant='contained' onClick={logOut}>
				Logout
			</Button>
			<CreateEventBtn />
			<EventCard filteredData={props.filteredData} />
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
