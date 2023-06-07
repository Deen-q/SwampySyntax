import './App.css';
import { useState } from 'react';
import {eventData} from './Components/Data/EventData'
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage'

function App() {
	// Declare state for input value
	const [input, setInput] = useState('');

	// Copy eventData array using spread operator
	const events = [...eventData];

	// Update input value in state on change
	function handleFilteredData(event) {
		setInput(event.target.value);
	}
	// Filter events based on input value
	const filteredEvents = events.filter(event =>
		event.title.toLowerCase().startsWith(input.toLowerCase())
	);

	return (
		<div>
			<NavBar handleFilteredData={handleFilteredData} input={input}/>
			<HomePage data={filteredEvents} input={input}/>
		</div>
	);
}

export default App;
