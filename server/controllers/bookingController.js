const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking({ ...req.body, userEmail: req.user.email });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userEmail: req.user.email });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
