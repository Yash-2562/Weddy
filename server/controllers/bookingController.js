
const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  console.log("POST /api/bookings received:", req.body);
  try {
    const { name, email, date, location, service, userId, userEmail } = req.body;

    
    if (!name || !email || !date || !location || !service || !userId || !userEmail) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newBooking = new Booking({
      name,
      email,
      date,
      location,
      service,
      userId,
      userEmail,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully!" });
  } catch (err) {
    console.error("Error saving booking:", err);
    res.status(500).json({ message: "Server error saving booking." });
  }
};

// Get all bookings for a user by userId or userEmail
const getUserBookings = async (req, res) => {
  try {
    const { userId, userEmail } = req.params;

    if (!userId && !userEmail) {
      return res.status(400).json({ message: "User ID or Email is required." });
    }

  
    const query = {};
    if (userId) query.userId = userId;
    if (userEmail) query.userEmail = userEmail;

    const bookings = await Booking.find(query).sort({ date: 1 }); 
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ message: "Server error fetching bookings." });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
};
