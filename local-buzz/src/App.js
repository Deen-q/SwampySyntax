import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import HomePage from '../src/Components/HomePage/HomePage';
import LandingPage from '../src/Components/LandingPage/LandingPage';
import Login from './Pages/Login.Page';
import PrivateRoute from './Pages/PrivateRoute.Page';
import Signup from './Pages/SignUp.Page';
import CreateEventPage from './Components/CreateEventPage/CreateEventPage';
import NavBar from './Components/NavBar/NavBar';
import { useEffect, useState } from 'react';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

function App() {
	// Defining states for filteredData and events
	const [filteredData, setFilteredData] = useState([]);
	const [events, setEvents] = useState([]);
	const [location, setLocation] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async position => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/geolocation/v1/geolocate?key=${REACT_APP_API_KEY}`,
					{
						method: 'GET',
					}
				);
				if (!response.ok) {
					throw new Error('Geolocation API response not ok');
				}
				const data = await response.json();
				setLocation({
					latitude: data.location.lat,
					longitude: data.location.lng,
				});
				console.log({ location });
			} catch (error) {
				console.error('Error:', error);
			}
		});
	}, [location]);

	const fetchData = () => {
		fetch('http://localhost:5000/events')
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
		try {
			const response = await fetch('http://localhost:5000/events', {
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
				<h1>LATTITUDE{location.lattitude}</h1>
				<h1>LONGITUDE{location.longitude}</h1>
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
							element={<HomePage filteredData={filteredData} />}
						/>
						<Route
							exact
							path='/createeventpage'
							element={<CreateEventPage addNewEvent={addNewEvent} />}
						/>
					</Route>
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
