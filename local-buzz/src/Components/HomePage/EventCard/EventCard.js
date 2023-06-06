import React from "react";
import {useState} from "react";

function EventCard(props) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <div key={id}>
      <img onClick={handleClick} alt='CardImage'>
        {image}
      </img>
      <h1>{title}</h1>
      <h3>{date}</h3>

      {!show && <p>{description}</p>}
    </div>
  );
}

export default EventCard;
