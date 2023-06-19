// import { eventData } from "../../Data/EventData";
import "./AddEventForm.css";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useNavigate} from "react-router-dom";
import communityEvent from "../../Data/Images/community-event.png";

export default function AddEventForm({addNewEvent}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [firstLineOfAddress, setFirstLineOfAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [image, setImage] = useState("");
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
      image: image,
    };

    addNewEvent(newEvent);
    //navigate to the home page automatically after submitting the form (function has been run)
    navigate("/");
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div id='event-form-container'>
      {/*Run the onSubmit once the form has been filled*/}
      <form onSubmit={handleSubmit}>
        <h1 className='add-event-title'>Create an Event</h1>
        {/* <label htmlFor='title'>Title:</label> */}
        <input
          required
          type='text'
          id='title'
          name='title'
          placeholder='Add Title'
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        {/* <label htmlFor='description'>Description:</label> */}
        <textarea
          required
          type='text'
          id='description'
          name='description'
          placeholder='Add Description'
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        {/* <label htmlFor='date'>Date:</label> */}
        <input
          required
          type='date'
          id='date'
          name='date'
          placeholder='Date'
          onChange={(event) => setDate(event.target.value)}
        ></input>
        {/* <label htmlFor='time'>Time:</label> */}
        <input
          required
          type='time'
          id='time'
          name='time'
          placeholder='Time'
          onChange={(event) => setTime(event.target.value)}
        ></input>
        {/* <label htmlFor='location'>Location:</label> */}
        <input
          required
          type='text'
          id='firstLineOfAddress'
          name='firstLineOfAddress'
          placeholder='First Line Of Address'
          onChange={(event) => setFirstLineOfAddress(event.target.value)}
        ></input>
        {/* <label htmlFor='image'>Image:</label> */}
        <input
          required
          type='text'
          id='city'
          name='city'
          placeholder='City'
          onChange={(event) => setCity(event.target.value)}
        ></input>
        <input
          required
          type='text'
          id='postcode'
          name='postcode'
          placeholder='Postcode'
          onChange={(event) => setPostcode(event.target.value)}
        ></input>
        <input
          type='file'
          id='image'
          name='image'
          placeholder='Upload your image'
          onChange={(e) => handleImageUpload(e)}
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
