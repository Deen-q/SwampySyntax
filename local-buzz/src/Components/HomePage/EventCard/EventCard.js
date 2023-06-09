import React, { useState } from 'react';
import './EventCard.css';

function EventCard(props) {
	// Define state variable for showing event description
	const [show, setShow] = useState({});

	// Define function to handle click event on image
	function handleClick(eventId) {
		// Update the show state variable to toggle the description of the clicked event
		setShow(prevShow => ({
			...prevShow, // copy the previous state object

			[eventId]: !prevShow[eventId], // toggle the show property of the clicked event id
		}));
	}

	// Render the EventCard component
	return (
		<>
			<div className='EventCardContainer'>
				{props.filteredData.map(event => (
					<div key={event.id}>
						{/* add click event listener to toggle the description of the clicked event  */}
						<img
							className='event-img'
							onClick={() => handleClick(event.id)}
							alt='CardImage'
							src={event.image}
						/>
						<div className='TextBorder'>
							<h1>{event.title}</h1>
							<h3>{event.date}</h3>
							{/* show the description of the clicked event if the show property is true  */}
							{show[event.id] && <p>{event.description}</p>}
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default EventCard;
