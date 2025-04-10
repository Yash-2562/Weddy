const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving booking" });
  }
});

module.exports = router;
