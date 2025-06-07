
const express = require("express");
const router = express.Router();
const { createBooking, getUserBookings } = require("../controllers/bookingController");

// Get all bookings
router.get("/user/:userId", getUserBookings); // GET bookings for a user

// Create a booking
router.post("/", createBooking);

// Example Express route
router.delete("/api/bookings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting booking" });
  }
});


module.exports = router;
