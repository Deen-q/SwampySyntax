import React from "react";

import { useState } from "react";
import { eventData } from "../../Data/EventData";


function EventCard() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  console.log(eventData);
  return (
    <>
    {eventData.map((event) => (
    <div key={event.id}>
      <img onClick={handleClick} alt='CardImage'>
        {event.image}
      </img>
      <h1>{event.title}</h1>
      <h3>{event.date}</h3>

      {!show && <p>{event.description}</p>}
    </div>
    ))}
    </>
  );
}

export default EventCard;
