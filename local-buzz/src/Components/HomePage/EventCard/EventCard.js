import React, { useState } from 'react';
function EventCard(props) {
	// Declare state for showing/hiding event description
	const [show, setShow] = useState({});
	// Toggle show state for clicked event
	function handleClick(eventId) {
		setShow(prevShow => ({
			...prevShow,
			[eventId]: !prevShow[eventId],
		}));
	}
	return (
		<>
			{/* Map through event data and render event cards */}
			{props.data.map(event => (
				<div key={event.id}>
					{/* Event image with click handler */}
					<img
						onClick={() => handleClick(event.id)}
						alt='CardImage'
						src={event.image}
					/>
					{/* Event title and date */}
					<h1>{event.title}</h1>
					<h3>{event.date}</h3>
					{/* Render event description if show state is true */}
					{show[event.id] && <p>{event.description}</p>}
				</div>
			))}
		</>
	);
}
export default EventCard;
