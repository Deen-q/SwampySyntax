// Importing necessary modules and components
import './App.css';
import { useState } from 'react';
import { eventData } from './Components/Data/EventData';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import CreateEventPage from './Components/CreateEventPage/CreateEventPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Defining the main function App
function App() {
	// Defining states for filteredData and events
	const [filteredData, setFilteredData] = useState([...eventData]);
	const [events, setEvents] = useState([...eventData]);

	// Function to handle filtered data
	function handleFilteredData(event) {
		const inputValue = event.target.value;
		const filteredData = events.filter(event =>
			event.title.toLowerCase().includes(inputValue.toLowerCase())
		);
		setFilteredData(filteredData);
	}

	// Function to add new event
	function addNewEvent(newEvent) {
		const updatedEvents = [...events, newEvent];
		setEvents(updatedEvents);
		setFilteredData(updatedEvents);
	}

	// Rendering the components and routes
	return (
		<div>
			<BrowserRouter>
				<NavBar handleFilteredData={handleFilteredData} />
				<Routes>
					<Route path='/' element={<HomePage filteredData={filteredData} />} />
					<Route
						path='/createeventpage'
						element={<CreateEventPage addNewEvent={addNewEvent} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

// Exporting the main function App as default
export default App;
