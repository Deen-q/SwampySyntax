import './App.css';
import { useState } from 'react';
import { eventData } from './Components/Data/EventData';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';

function App() {
	const [filteredData, setFilteredData] = useState([]);
	// Copy eventData array using spread operator
	const events = [...eventData];
	// Filter events based on input value
	function handleFilteredData(event) {
		const inputValue = event.target.value;

		const filteredData = events.filter(event =>
			event.title.toLowerCase().includes(inputValue.toLowerCase())
		);
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
