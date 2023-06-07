import React, {useState} from "react";
import {eventData} from "../../Data/EventData";

function EventCard() {
  const [show, setShow] = useState({});

  function handleClick(eventId) {
    setShow((prevShow) => ({
      ...prevShow,
      [eventId]: !prevShow[eventId],
    }));
  }

  return (
    <>
      {eventData.map((event) => (
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
    </>
  );
}

export default EventCard;
