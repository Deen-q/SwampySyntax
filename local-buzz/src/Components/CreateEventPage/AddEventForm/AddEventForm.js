// import { eventData } from "../../Data/EventData";
import "./AddEventForm.css";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useNavigate} from "react-router-dom";
import communityEvent from "../../Data/Images/community-event.png";
import {Link} from "react-router-dom";

export default function AddEventForm({addNewEvent}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [firstLineOfAddress, setFirstLineOfAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  //useNavigate is a hook that allows us to navigate to a different page. useNavigate can be used within a function.
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const newEvent = {
      id: uuidv4(),
      title: title,
      description: description,
      date: date,
      time: time,
      firstLineOfAddress: firstLineOfAddress,
      city: city,
      postcode: postcode,
      // changed to hardcoded image for now
      image: communityEvent,
    };

    addNewEvent(newEvent);
    //navigate to the home page automatically after submitting the form (function has been run)
    navigate("/");
  }

  return (
    <div id='event-form-container'>
    <div className='createEventHeader'>
    <Link to= '/homepage' 
    style={{textDecoration: "none", color: "white"}}>  <button className="closeFormButton"> X </button>
    </Link>
    </div>
      {/*Run the onSubmit once the form has been filled*/}
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          required
          type='text'
          id='title'
          name='title'
          placeholder='Add Title'
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label htmlFor='description'>Description</label>
        <textarea
          required
          type='text'
          id='description'
          name='description'
          placeholder='Add Description'
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <label htmlFor='date'>Date</label>
        <input
          required
          type='date'
          id='date'
          name='date'
          placeholder='Date'
          onChange={(event) => setDate(event.target.value)}
        ></input>
        <label htmlFor='time'>Time</label>
        <input
          required
          type='time'
          id='time'
          name='time'
          placeholder='Time'
          onChange={(event) => setTime(event.target.value)}
        ></input>
        <label htmlFor='location'>Address Line 1</label>
        <input
          required
          type='text'
          id='firstLineOfAddress'
          name='firstLineOfAddress'
          placeholder='First Line Of Address'
          onChange={(event) => setFirstLineOfAddress(event.target.value)}
        ></input>
        <label htmlFor='image'>City</label>
        <input
          required
          type='text'
          id='city'
          name='city'
          placeholder='City'
          onChange={(event) => setCity(event.target.value)}
        ></input>
        <label htmlFor='postcode'>Postcode</label>
        <input
          required
          type='text'
          id='postcode'
          name='postcode'
          placeholder='Postcode'
          onChange={(event) => setPostcode(event.target.value)}
        ></input>
        <label htmlFor='image'>Image</label>
        <input
          type='text'
          id='image'
          name='image'
          value='IGNORE FOR NOW'
          // onChange={event => setImage(communityEvent)}
        ></input>
        {/* <label for="tags">Tags:</label>
                <input type="text" id="tags" name="tags" placeholder="Tags for Event"></input>
                <label for="link">Link:</label>
                <input type="text" id="link" name="link" placeholder="Link to Event"></input>
                */}
        <input type='submit' value='Submit' id='submit'></input>
      </form>
    </div>
  );
}
