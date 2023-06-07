import React, { useState } from 'react';
import { eventData } from '../../Data/EventData';

function EventCard(props) {
  const [show, setShow] = useState({});

  function handleClick(eventId) {
    setShow(prevShow => ({
      ...prevShow,
      [eventId]: !prevShow[eventId],
    }));
  }

  return (
	<div>
	  {eventData.map(event => (
		<div key={event.id}>
		  <img
			onClick={() => handleClick(event.id)}
			alt='CardImage'
			src={event.image}
		  />
		  <h1>{event.title}</h1>
		  <h3>{event.date}</h3>
		  {show[event.id] && <p>{event.description}</p>}
		</div>
	  ))}
	</div>
  );
	
      {/* {props.input === '' ? (
        eventData.map(event => (
          <div key={event.id}>
            <img
              onClick={() => handleClick(event.id)}
              alt='CardImage'
              src={event.image}
            />
            <h1>{event.title}</h1>
            <h3>{event.date}</h3>
            {show[event.id] && <p>{event.description}</p>}
          </div>
        ))
      ) : (
        props.input !== '' &&
        props.data.map(event => (
          <div key={event.id}>
            <img
              onClick={() => handleClick(event.id)}
              alt='CardImage'
              src={event.image}
            />
            <h1>{event.title}</h1>
            <h3>{event.date}</h3>
            {show[event.id] && <p>{event.description}</p>}
          </div>
        ))
      )} */}
	 

	}
	export default EventCard;

