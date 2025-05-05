
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const bookingRoutes = require("./routes/bookings");

// // Load env variables
// dotenv.config();

// // Create express app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/bookings", bookingRoutes);

// app.get("/", (req, res) => {
//   res.send("🎉 Weddy Server is running!");
// });

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)  // Make sure your .env uses MONGO_URI
//   .then(() => {
//     console.log("✅ Connected to MongoDB");
//     app.listen(PORT, () =>
//       console.log(`🚀 Server running at http://localhost:${PORT}`)
//     );
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//   });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookingRoutes = require("./routes/bookings");

// Load environment variables from .env
dotenv.config();

// Create express app
const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("🎉 Weddy Server is running!");
});

// Dynamically set MONGO_URI for local or production environment
const MONGO_URI = process.env.NODE_ENV === "production"
  ? process.env.MONGO_URI ||  "mongodb+srv:yashpal:linkuyash2828@weddycluster.umlux0y.mongodb.net/weddyDB?retryWrites=true&w=majority&appName=Weddycluster" // Use MongoDB Atlas URI for production 
  : "mongodb://localhost:27017/weddyDB"; // Local MongoDB URI for development

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)  // Dynamically set MONGO_URI from .env or default to local
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

