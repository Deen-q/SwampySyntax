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
						<div className='TextBorder'>
							<img
								className='event-img'
								onClick={() => handleClick(event.id)}
								alt='CardImage'
								src={event.image}
							/>

							<h2>{event.title}</h2>
							<div className='EventDateAndCity'>
								<div className='contentContainer'></div>
								<p>{event.date}</p>
								<p>{event.city}</p>
							</div>
							{/* show the description of the clicked event if the show property is true  */}
							{show[event.id] && (
								<div>
									<div className='EventAddressAndPostcode'>
										<p>{event.firstLineOfAddress}</p>
										<p>{event.postcode}</p>
									</div>
									<p>{event.time}</p>
									<p>{event.description}</p>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default EventCard;
