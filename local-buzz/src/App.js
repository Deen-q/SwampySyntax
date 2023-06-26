import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import HomePage from '../src/Components/HomePage/HomePage';
import LandingPage from '../src/Components/LandingPage/LandingPage';
import Login from './Pages/Login.Page';
import PrivateRoute from './Pages/PrivateRoute.Page';
import Signup from './Pages/SignUp.Page';
import CreateEventPage from './Components/CreateEventPage/CreateEventPage';
import ProfilePage from './Components/ProfilePage/profilePage';
import NavBar from './Components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_URL = process.env.REACT_APP_URL;

function App() {
	// Defining states for filteredData and events
	const [filteredData, setFilteredData] = useState([]);
	const [events, setEvents] = useState([]);
	const [location, setLocation] = useState(null);

	console.log(location);

	useEffect(() => {
		const fetchGeolocation = async () => {
			try {
				console.log('fetching geolocation');
				const response = await axios.get(`${REACT_APP_URL}geolocation`);
				setLocation(response.data);
			} catch (error) {
				console.error('Error fetching geolocation', error);
			}
		};
		fetchGeolocation();
	}, []);

	const fetchData = () => {
		fetch(`${REACT_APP_URL}events`)
			.then(response => response.json())
			.then(data => {
				setFilteredData(data);
				setEvents(data);
			})
			.catch(error => console.error('Error:', error));
	};

	useEffect(() => {
		fetchData();
	}, []);

	/*
	
	*/
	function haversineDistance(location, coords2, isMiles = false) {
		// Converts degrees to radians
		function toRad(x) {
			return (x * Math.PI) / 180;
		}

		const lon1 = location.longitude;
		const lat1 = location.latitude;

		const lon2 = coords2.longitude;
		const lat2 = coords2.latitude;

		// Radius of the Earth in kilometers
		const R = 6371;

		// Differences in coordinates
		const x1 = lat2 - lat1;
		const dLat = toRad(x1);
		const x2 = lon2 - lon1;
		const dLon = toRad(x2);

		// Haversine formula
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(toRad(lat1)) *
				Math.cos(toRad(lat2)) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const d = R * c;

		// Convert to miles if specified
		if (isMiles) d /= 1.60934;

		return d;
	}

	// Let's say we want to find events within 10 kilometers of the user
	const maxDistance = 10;

	// Filter the events based on their distance from the user
	const nearbyEvents = events.filter(event => {
		// Create a location object for the event
		const eventLocation = {
			latitude: event.latitude,
			longitude: event.longitude,
		};

		// Calculate the distance between the user and the event
		const distance = haversineDistance(userLocation, eventLocation);

		// Only include the event in the filtered list if it's within the max distance
		return distance <= maxDistance;
	});

	// Function to handle filtered data
	function handleFilteredData(event) {
		const inputValue = event.target.value;
		const filteredData = events.filter(event =>
			event.title.toLowerCase().startsWith(inputValue.toLowerCase())
		);
		setFilteredData(filteredData);
	}
	// this is where we need to make a POST request to the server
	// to add the new event to the database
	// and then update the events state with the new event

	async function addNewEvent(newEvent) {
		console.log('APP.JS LINE 68 ', newEvent);
		try {
			const response = await fetch(`${REACT_APP_URL}events`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newEvent),
			});
			const data = await response.json();
			console.log(data);
			fetchData();
		} catch (error) {
			console.error('Error:', error);
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
									events={events}
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
