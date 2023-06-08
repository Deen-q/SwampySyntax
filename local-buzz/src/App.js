// Import necessary modules and components
import './App.css';
import { useState } from 'react';
import { eventData } from './Components/Data/EventData'; // an array of event data
import NavBar from './Components/NavBar/NavBar'; // component for the navigation bar
import HomePage from './Components/HomePage/HomePage'; // component for the home page

function App() {
	// Define state variable for filtered data
	const [filteredData, setFilteredData] = useState([...eventData]);
	// Create a copy of the event data array
	const events = [...eventData];
	// Define function to handle filtered data
	function handleFilteredData(event) {
		// Get the user input from the event object
		const inputValue = event.target.value;
		// Filter the events array based on the user input
		const filteredData = events.filter(event =>
			event.title.toLowerCase().includes(inputValue.toLowerCase())
		);
		// Update the state variable with the filtered data
		setFilteredData(filteredData);
	}
	return (
		<div>
			<NavBar handleFilteredData={handleFilteredData} />
			<HomePage filteredData={filteredData} />
		</div>
	);
}

export default App;
