// import { eventData } from "../../Data/EventData";
import './AddEventForm.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddEventForm({ addNewEvent }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [location, setLocation] = useState('');
	const [image, setImage] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		const newEvent = {
			id: uuidv4(),
			title: title,
			description: description,
			date: date,
			time: time,
			location: location,
			image: image,
		};

		addNewEvent(newEvent);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Title:</label>
				<input
					type='text'
					id='title'
					name='title'
					placeholder='Title of Event'
					onChange={event => setTitle(event.target.value)}></input>
				<label htmlFor='description'>Description:</label>
				<input
					type='text'
					id='description'
					name='description'
					placeholder='Description of Event'
					onChange={event => setDescription(event.target.value)}></input>
				<label htmlFor='date'>Date:</label>
				<input
					type='date'
					id='date'
					name='date'
					onChange={event => setDate(event.target.value)}></input>
				<label htmlFor='time'>Time:</label>
				<input
					type='time'
					id='time'
					name='time'
					onChange={event => setTime(event.target.value)}></input>
				<label htmlFor='location'>Location:</label>
				<input
					type='text'
					id='location'
					name='location'
					placeholder='Location of Event'
					onChange={event => setLocation(event.target.value)}></input>
				<label htmlFor='image'>Image:</label>
				<input
					type='file'
					id='image'
					name='image'
					onChange={event => setImage(event.target.value)}></input>
				{/* <label for="tags">Tags:</label>
                <input type="text" id="tags" name="tags" placeholder="Tags for Event"></input>
                <label for="link">Link:</label>
                <input type="text" id="link" name="link" placeholder="Link to Event"></input>
                */}
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
}
