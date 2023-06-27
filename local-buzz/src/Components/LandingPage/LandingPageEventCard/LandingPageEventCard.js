//import React, {useState} from "react";
import "../../HomePage/EventCard/EventCard.css";
// import clock from "../../../assets/icons8-clock-100.png";
import address from "../../../assets/icons8-address-100.png";
import date from "../../../assets/icons8-calendar-100.png";
// import speechBubble from "../../../assets/icons8-speech-90.png";
// import coin from "../../../assets/icons8-coin-100.png";
// import ticket from "../../../assets/icons8-ticket-100.png";
import { useNavigate } from "react-router-dom";
import "./LandingPageEventCard.css";

function LandingPageEventCard(props) {
  const navigate = useNavigate();
  // Define state variable for showing event description
  // const [show, setShow] = useState({});
  //   const [showDescription, setShowDescription] = useState(false);

  // Define function to handle click event on image
  // function handleClick(eventId) {
  //   // Update the show state variable to toggle the description of the clicked event
  //   setShow((prevShow) => ({
  //     ...prevShow, // copy the previous state object
  //     // the below is an if statement that checks if the eventId is in the show object, if it is then it will return the opposite of the current value of the show property of the eventId, if it isn't then it will return true
  //     [eventId]: !prevShow[eventId], // toggle the show property of the clicked event id
  //   }));
  // }

  //   function handleDescriptionClick() {
  //     setShowDescription((prevShowDescription) => !prevShowDescription);
  //   }

  // Render the EventCard component
  return (
    <>
      <div className='EventCardContainer'>
        {props.filteredData?.map(
          (
            event //'?' is 'Optional Chaining' bypasses the error from undefined. It is still undefined, however.
          ) => (
            <div
              key={event._id}
              className={[event._id] + " event-card"}
            >
            {/* <div key={event._id} className='event-card'> */}
              {/* add click event listener to toggle the description of the clicked event  */}
              <div className='TextBorder'>
              <h4 className="EventDescriptionShort">
                {event.description.split(" ").slice(0, 10).join(" ")}
                {/* Display only the first 10 words of the description */}
              ...</h4>
                {/* <div className='img-container'> */}{" "}
                <img
                  className='event-img' id="event-img"
                  onClick={() => navigate(`/login`)}
                  alt='CardImage'
                  src={event.image}
                />
                {/* </div> */}
                <div className='EventTitle'>
                  <h2>{event.title}</h2>
                </div>
                <div className='EventDateAndCity'>
                  <img className='img-icon' src={date} alt='date-icon' />
                  <p> {event.date}</p>
                  
                 <img className= 'img-icon' src={address} alt='address-icon' />
                  <p> {event.city}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default LandingPageEventCard;
