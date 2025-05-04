// // const Booking = require("../models/Booking");

// // ✅ Create a new booking (uses logged-in user info)
// exports.createBooking = async (req, res) => {
//   try {
//     const booking = new Booking({
//       ...req.body,
//       userEmail: req.user.email,  // Always from the token
//       userId: req.user.uid,       // Optional but useful
//     });

//     await booking.save();
//     res.status(201).json({ message: "Booking saved!", booking });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// };

// // ✅ Get bookings for the logged-in user
// exports.getBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find({ userEmail: req.user.email });
//     res.status(200).json(bookings);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// };
const Booking = require("../models/Booking");

// ✅ Create a booking (no token required)
const createBooking = async (req, res) => {
  console.log("POST request received:", req.body);
  try {
    const { name, email, date, location, service } = req.body;

    if (!name || !email || !date || !location || !service) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newBooking = new Booking({
      name,
      email,
      date,
      location,
      service,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully!" });
  } catch (err) {
    console.error("Error saving booking:", err);
    res.status(500).json({ message: "Server error saving booking." });
  }
};

// ✅ Get all bookings (no token required)
const getBookings = async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.json(allBookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ message: "Server error fetching bookings." });
  }
};

module.exports = {
  createBooking,
  getBookings,
};
