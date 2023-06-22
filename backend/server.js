require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Event = require('./productModel');
const axios = require('axios');

const PORT = process.env.PORT;

// Initializes a new Express application
const app = express();

// Use CORS middleware to handle Cross Origin Resource Sharing
app.use(cors());

// Parses incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true, // Allows to use the new MongoDB driver's useNewUrlParser.
	useUnifiedTopology: true, // Allows to use the new MongoDB driver's new connection management engine.
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', error => console.error('Connection error: ', error));

// Bind connection to open event (to get notification of successful connection)
db.once('open', () => console.log('Connected to MongoDB'));

// Define route to get all products
app.get('/events', async (req, res) => {
	try {
		// Use Mongoose model's find method to fetch all products from MongoDB
		const events = await Event.find();

		console.log('Events:', events); // Log the fetched products to console

		// Send the fetched products as JSON response
		res.json(events);
	} catch (err) {
		console.error('Error while handling /events:', err); // Log any errors

		// Send error message as JSON response with status 500 (Internal Server Error)
		res.status(500).json({ message: err.message });
	}
});
//define a method that inserts user id to an event when a user clicks on the attend button
app.put('/events/:_id', async (req, res) => {
	try {
		const event = await Event.findById(req.params._id);
		const userId = req.body.userId;
		console.log('event:', event);

		if (event == null) {
			return res.status(404).json({ message: 'Cannot find event' });
		}

		if (!event.joinedUsers.includes(userId)) {
			event.joinedUsers.push(userId);
		} else {
			console.log('user already joined');
			return res.status(400).json({ message: 'User already joined' });
		}

		const updatedEvent = await event.save();

		res.json(updatedEvent);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

//Define route to post a new product
app.post('/events', async (req, res) => {
	const event = new Event({
		title: req.body.title,
		description: req.body.description,
		date: req.body.date,
		image: req.body.image,
		firstLineOfAddress: req.body.firstLineOfAddress,
		city: req.body.city,
		postcode: req.body.postcode,
		time: req.body.time,
		price: req.body.price,
		capacity: req.body.capacity,
		latitude: req.body.latitude,
		longitude: req.body.longitude,

		// Add other fields here to suit your document structure
	});

	try {
		const newEvent = await event.save();
		res.status(201).json(newEvent);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

//Define a method to update a product
app.patch('/events/:id', async (req, res) => {
	try {
		const event = await Event.findById(req.params.id);

		if (event == null) {
			return res.status(404).json({ message: 'Cannot find event' });
		}

		if (req.body.title != null) {
			event.title = req.body.title;
		}

		if (req.body.description != null) {
			event.description = req.body.description;
		}

		if (req.body.date != null) {
			event.date = req.body.date;
		}

		if (req.body.image != null) {
			event.image = req.body.image;
		}

		if (req.body.firstLineOfAddress != null) {
			event.firstLineOfAddress = req.body.firstLineOfAddress;
		}

		if (req.body.city != null) {
			event.city = req.body.city;
		}

		if (req.body.postcode != null) {
			event.postcode = req.body.postcode;
		}

		if (req.body.time != null) {
			event.time = req.body.time;
		}

		if (req.body.price != null) {
			event.price = req.body.price;
		}

		if (req.body.capacity != null) {
			event.capacity = req.body.capacity;
		}

		// repeat the above if-condition block for other fields (category, image, etc.)

		const updatedEvent = await event.save();

		res.json(updatedEvent);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

//Define a method to delete a product
app.delete('/events/:id', async (req, res) => {
	console.log('id:', req.params.id); // 1. Log the id
	try {
		const result = await Event.deleteOne({ _id: req.params.id });
		console.log('delete result:', result); // 2. Log the result
		if (result.deletedCount === 0) {
			return res.status(404).json({ message: 'Cannot find event' });
		}

		res.json({ message: 'Event deleted' });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
});

app.get('/geolocation', async (req, res) => {
	try {
		const geoResponse = await axios.post(
			`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLE_API_KEY}`
		);
		res.json(geoResponse.data);
	} catch (error) {
		res.json({ error: error.toString() });
	}
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
