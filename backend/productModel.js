// Import Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	title: String,
	description: String,
	date: String,
	image: String, //💥💥 Check this and make sure we are converting images to strings
	firstLineOfAddress: String,
	city: String,
	postcode: String,
	time: String,
	price: String,
	capacity: String,
	joinedUsers: [String],
	latitude: Number,
	longitude: Number,
});

module.exports = mongoose.model('Event', eventSchema);

//Detailed notes

// const mongoose = require("mongoose");

// // Define a schema using Mongoose Schema API.
// // Here, you're describing the shape of the documents within the 'products' collection.
// // You have fields 'name' of type String, and 'price' of type Number.
// // Add other fields as per your requirement.
// const productSchema = new mongoose.Schema({
//   name: String, //💥💥Update this to match the fields in your database
//   price: Number, //💥💥Update this to match the fields in your database
//   category: String, //💥💥Update this to match the fields in your database
//   image: String, //💥💥Update this to match the fields in your database
//   //💥💥 Add other fields here
// });

// // Create a model from the schema.
// // Mongoose models provide an interface to the database for CRUD operations.
// // The first argument is the singular name of the collection your model is for.
// // Mongoose automatically looks for the plural, lowercase version of your model name in the MongoDB collection.
// // In this case, 'Product' model is for 'products' collection.
// // The second argument is the schema which the model governs.
// module.exports = mongoose.model("Product", productSchema);
