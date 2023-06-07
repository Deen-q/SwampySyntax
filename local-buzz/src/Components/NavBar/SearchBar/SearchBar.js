import { useState } from 'react';
import './SearchBar.css';
import { eventData } from '../../Data/EventData';

let filteredEventsList = [];
function SearchBar() {
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
	filteredEventsList = filteredEvents;

	return (
		<input
			id='search'
			onKeyUp={handleFilteredData}
			type='text'
			placeholder='Search for an event'
		/>
	);
}

export { filteredEventsList };
export default SearchBar;
