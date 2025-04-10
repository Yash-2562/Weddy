const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  service: String,
  location: String,
  date: String,
  userId: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
