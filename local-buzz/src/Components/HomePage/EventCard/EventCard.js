import React, {useState} from "react";
import "./EventCard.css";
import Dots from "../../../assets/icons8-3-dots-50.png";
import clock from "../../../assets/icons8-clock-100.png";
import address from "../../../assets/icons8-address-100.png";
import date from "../../../assets/icons8-calendar-100.png";
import speechBubble from "../../../assets/icons8-speech-90.png";

function EventCard(props) {
  // Define state variable for showing event description
  const [show, setShow] = useState({});
  const [showDescription, setShowDescription] = useState(false);

  // Define function to handle click event on image
  function handleClick(eventId) {
    // Update the show state variable to toggle the description of the clicked event
    setShow((prevShow) => ({
      ...prevShow, // copy the previous state object
      // the below is an if statement that checks if the eventId is in the show object, if it is then it will return the opposite of the current value of the show property of the eventId, if it isn't then it will return true
      [eventId]: !prevShow[eventId], // toggle the show property of the clicked event id
    }));
  }

  function handleDescriptionClick() {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  }

  // Render the EventCard component
  return (
    <>
      <div className='EventCardContainer'>
        {props.filteredData?.map(
          (
            event //'?' is 'Optional Chaining' bypasses the error from undefined. It is still undefined, however.
          ) => (
            <div key={event._id} className='event-card'>
              {/* add click event listener to toggle the description of the clicked event  */}
              <div className='TextBorder'>
                {/* <div className='img-container'> */}{" "}
                <img
                  className='event-img'
                  onClick={() => handleClick(event._id)}
                  alt='CardImage'
                  src={event.image}
                />
                {/* </div> */}
                <div className='EventTitleAndDots'>
                  <h2>{event.title}</h2>
                  <img
                    className='eventTitle-dots'
                    onClick={() => handleClick(event._id)}
                    alt='CardImage'
                    src={Dots}
                  />
                </div>
                <div className='EventDateAndCity'>
                  <img className='img-icon' src={date} alt='date-icon' />
                  <p> {event.date}</p>
                  {!show[event._id] && (
                    <>
                      <img
                        className='img-icon'
                        src={address}
                        alt='address-icon'
                      />{" "}
                      <p>{event.city}</p>
                    </>
                  )}
                </div>
                {/* show the description of the clicked event if the show property is true  */}
                {show[event._id] && (
                  <div>
                    <div className='EventDateAndCity'>
                      <img className='img-icon' src={clock} alt='date-icon' />
                      <p>{event.time}</p>
                    </div>
                    <div className='EventDateAndCity'>
                      <img
                        className='img-icon-top'
                        src={address}
                        alt='address-icon'
                      />
                      <p>
                        {event.firstLineOfAddress}, {event.city},{" "}
                        {event.postcode}
                      </p>
                    </div>
                    <div className='EventDateAndCity'>
                      <img
                        className='img-icon-top'
                        src={speechBubble}
                        alt='speech-bubble-icon'
                      />
                      <p className='EventDescription'>{event.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );

}

export default EventCard;
