import React, { useState } from "react";
import "./EventCard.css";
import Dots from "../../../assets/icons8-3-dots-50.png";
import clock from "../../../assets/icons8-clock-100.png";
import address from "../../../assets/icons8-address-100.png";
import date from "../../../assets/icons8-calendar-100.png";
import speechBubble from "../../../assets/icons8-speech-90.png";

function EventCard(props) {
  // Define state variable for showing event description
  const [show, setShow] = useState({});

  // Define function to handle click event on image
  function handleClick(eventId) {
    // Update the show state variable to toggle the description of the clicked event
    setShow((prevShow) => ({
      ...prevShow, // copy the previous state object
      // the below is an if statement that checks if the eventId is in the show object, if it is then it will return the opposite of the current value of the show property of the eventId, if it isn't then it will return true
      [eventId]: !prevShow[eventId], // toggle the show property of the clicked event id
    }));
  }

  // Render the EventCard component
  return (
    <>
      <div className="EventCardContainer">
        {props.filteredData.map((event) => (
          <div key={event.id}>
            {/* add click event listener to toggle the description of the clicked event  */}
            <div className="TextBorder">
              <img
                className="event-img"
                onClick={() => handleClick(event.id)}
                alt="CardImage"
                src={event.image}
              />
              <div className="EventTitleAndDots">
                <h2>{event.title}</h2>
                <img
                  className="eventTitle-dots"
                  onClick={() => handleClick(event.id)}
                  alt="CardImage"
                  src={Dots}
                />
              </div>
              <div className="EventDateAndCity">
                <img className="img-icon" src={date} />
                <p> {event.date}</p>
                {!show[event.id] && <p>{event.city}</p>}
              </div>
              {/* show the description of the clicked event if the show property is true  */}
              {show[event.id] && (
                <div>
                  <p>{event.time}</p>
                  <p>
                    {event.firstLineOfAddress}, {event.city}, {event.postcode}
                  </p>
                  {/* <p></p> */}

                  <p className="EventDescription">{event.description}</p>
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
