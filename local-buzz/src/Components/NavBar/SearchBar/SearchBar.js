import { useState } from 'react';
import './SearchBar.css';
import { eventData } from '../../Data/EventData';
import EventCard from '../../HomePage/EventCard/EventCard';
import Logo from '../Logo/Logo';
export default function SearchBar() {
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
		<>
			{/* Navbar with logo and search input */}
			<div id='navbar'>
				<Logo />
				<input
					id='search'
					onKeyUp={handleFilteredData}
					type='text'
					placeholder='Search for an event'
				/>
			</div>
			{/* Render EventCard component with filtered events */}
			<EventCard data={filteredEvents} />
		</>
	);
}
