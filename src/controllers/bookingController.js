const bookingServices = require("../services/bookingServices");

let bookingController = {
  createBooking: async (req, res) => {
    try {
      let booking = await bookingServices.createBookingService(req.body);
      res.status(200).json(booking);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  getAllBooking: async (req, res) => {
    try {
      let booking = await bookingServices.getAllBookingService();
      res.status(200).json(booking);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  getBookingById: async (req, res) => {
    try {
      let booking = await bookingServices.getBookingByIdService(req.params.id);
      res.status(200).json(booking);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  updateBookingById: async (req, res) => {
    try {
      let booking = await bookingServices.updateBookingByIdService(
        req.params.id,
        req.body
      );
      res.status(200).json(booking);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
};

module.exports = bookingController;
