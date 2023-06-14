require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./productModel");

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
db.on("error", (error) => console.error("Connection error: ", error));

// Bind connection to open event (to get notification of successful connection)
db.once("open", () => console.log("Connected to MongoDB"));

// Define route to get all products
app.get("/products", async (req, res) => {
  try {
    // Use Mongoose model's find method to fetch all products from MongoDB
    const products = await Product.find();

    console.log("Products:", products); // Log the fetched products to console

    // Send the fetched products as JSON response
    res.json(products);
  } catch (err) {
    console.error("Error while handling /products:", err); // Log any errors

    // Send error message as JSON response with status 500 (Internal Server Error)
    res.status(500).json({ message: err.message });
  }
});

// 💥💥💥💥💥💥💥💥💥 change this to suit the structure of our data

//Define route to post a new product
app.post("/products", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
    // Add other fields here to suit your document structure
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 💥💥💥💥💥💥💥💥💥 change this to suit the structure of our data
//Define a method to update a product
app.patch("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product == null) {
      return res.status(404).json({ message: "Cannot find product" });
    }

    if (req.body.name != null) {
      product.name = req.body.name;
    }

    if (req.body.price != null) {
      product.price = req.body.price;
    }

    if (req.body.category != null) {
      product.category = req.body.category;
    }

    if (req.body.image != null) {
      product.image = req.body.image;
    }

    // repeat the above if-condition block for other fields (category, image, etc.)

    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Define a method to delete a product
app.delete("/products/:id", async (req, res) => {
  console.log("id:", req.params.id); // 1. Log the id
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    console.log("delete result:", result); // 2. Log the result
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Cannot find product" });
    }

    res.json({ message: "Product deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => console.log("Server started on port 5000"));
