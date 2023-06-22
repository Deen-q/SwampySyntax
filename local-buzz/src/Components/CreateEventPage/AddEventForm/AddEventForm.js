// import { eventData } from "../../Data/EventData";
import "./AddEventForm.css";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {readAndCompressImage} from "browser-image-resizer";

export default function AddEventForm({addNewEvent}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [firstLineOfAddress, setFirstLineOfAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState("");
  //useNavigate is a hook that allows us to navigate to a different page. useNavigate can be used within a function.
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    //geocode function + address concatonation
    // const address = '42 Baker Street, NW1 6XE';

    const address = firstLineOfAddress + " " + city + " " +  postcode;
    

    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    //does it need to be reactapp.GOOGLE_API_KEY?

// // replace spaces with '+' for URL
const urlAddress = address.replace(/ /g, '+');
console.log(urlAddress)

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        if (data.status === 'OK') {
            const latitude = data.results[0].geometry.location.lat;
            const longitude = data.results[0].geometry.location.lng;
//             // do something with latitude and longitude
            console.log(`Line46: Latitude: ${latitude}, Longitude: ${longitude}`);
        } else {
            throw new Error(`Geocode error: ${data.status}`);
        }
    })
    .catch(error => console.error('Error:', error));
    ////////////////////////


    const newEvent = {
      id: uuidv4(),
      title: title,
      description: description,
      date: date,
      time: time,
      firstLineOfAddress: firstLineOfAddress,
      city: city,
      postcode: postcode,
      price: price,
      capacity: capacity,
      // changed to hardcoded image for now
      // image: communityEvent,
      image: image,
    };

    addNewEvent(newEvent);
    //navigate to the home page automatically after submitting the form (function has been run)
    navigate("/");
  }

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    const config = {
      quality: 0.5, // this is the compression rate (1 means no compression)
      maxWidth: 500, // the max size of the image width
      maxHeight: 500, // the max size of the image height
      autoRotate: true,
      debug: true,
    };

    try {
      const compressedFile = await readAndCompressImage(file, config);
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id='event-form-container'>
      <div className='createEventHeader'>
        <Link to='/homepage' style={{textDecoration: "none", color: "white"}}>
          {" "}
          <button className='closeFormButton'> X </button>
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
        <div className='price-capacity'>
          <label htmlFor='price'>Price</label>
          <input
            className='price'
            required
            type='number'
            id='price'
            name='price'
            placeholder='£'
            onChange={(event) => setPrice(event.target.value)}
          ></input>
          <label htmlFor='capacity'>Capacity</label>
          <input
            className='capacity'
            required
            type='number'
            id='capacity'
            name='capacity'
            placeholder='0'
            onChange={(event) => setCapacity(event.target.value)}
          ></input>
        </div>
        <label htmlFor='image'>Image</label>
        <input
          type='file'
          required
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
