/**
 * Smart Library System - Backend Server
 *
 * This file initializes and configures the Express server
 * with MongoDB connection using Mongoose.
 *
 * Port: 5000
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Import the Book routes
const bookRoutes = require("./routes/bookRoutes");

// Initialize Express application
const app = express();

// Define the port - uses environment variable or defaults to 5000
const PORT = process.env.PORT || 5000;

// ============================================
// MIDDLEWARE CONFIGURATION
// ============================================

// Enable CORS middleware to allow cross-origin requests from frontend
// This is necessary because frontend runs on a different port (3000)
app.use(cors());

// Parse incoming JSON request bodies
// This allows us to access req.body for POST requests
app.use(express.json());

// ============================================
// DATABASE CONNECTION
// ============================================

// MongoDB connection string - uses environment variable or local MongoDB
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/smart_library";

// Connect to MongoDB using Mongoose
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Successfully connected to MongoDB database");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit if database connection fails
  });

// ============================================
// ROUTES
// ============================================

// Mount book routes at /api/books endpoint
app.use("/api/books", bookRoutes);

// Root route - basic health check
app.get("/", (req, res) => {
  res.json({
    message: "Smart Library System API is running!",
    endpoints: {
      getAllBooks: "GET /api/books",
      addBook: "POST /api/books",
      deleteBook: "DELETE /api/books/:id",
    },
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
