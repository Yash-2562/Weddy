// // const express = require("express");
// // const router = express.Router();
// // const Booking = require("../models/Booking");

// // router.get("/", async (req, res) => {
// //   try {
// //     const allBookings = await Booking.find();
// //     res.json(allBookings);
// //   } catch (err) {
// //     res.status(500).json({ error: "Cannot fetch bookings" });
// //   }
// // });

// // router.post("/", async (req, res) => {
// //   console.log("POST request received:", req.body);
// //   try {
// //     const newBooking = new Booking(req.body);
// //     await newBooking.save();
// //     res.status(201).json({ message: "Booking saved!" });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: "Error saving booking" });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const router = express.Router();
// const { createBooking, getBookings } = require("../controllers/bookingController");
// const verifyToken = require("../middleware/verifyToken");

// // ✅ Get bookings (logged-in user only)
// router.get("/", verifyToken, getBookings);

// // ✅ Create a booking
// router.post("/", verifyToken, createBooking);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { createBooking, getBookings } = require("../controllers/bookingController");

// ❌ No more verifyToken middleware

// ✅ Get all bookings (open route)
router.get("/", getBookings);

// ✅ Create a booking (open route)
router.post("/", createBooking);

module.exports = router;
