const db = require("../models");

let bookingServices = {
  createBookingService: async (data) => {
    try {
      let customerId = data?.customerId;
      const { fullName, email, phoneNumber, address, tourId } = data;

      if (!data?.customerId) {
        if (!fullName || !email || !phoneNumber || !address || !tourId) {
          throw new Error("Missing required fields");
        }
        const customer = await db.Customer.create({
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          dateOfBirth: data?.dateOfBirth || "",
          gender: data?.gender || "",
          nationality: data?.nationality || "",
        });
        customerId = customer.id;
      }

      await db.Booking.create({
        customerId: customerId,
        tourId: tourId,
        status: "PENDING",
        bookingDate: new Date(),
        numberOfParticipants: data?.numberOfParticipants || 1,
        totalPrice: data?.totalPrice,
      });
      return { message: "Create tour successfully" };
    } catch (error) {
      throw error;
    }
  },
  getAllBookingService: async () => {
    try {
      const booking = await db.Booking.findAll({
        include: [
          {
            model: db.Customer,
            as: "bookingCustomer",
            attributes: ["fullName", "email", "phoneNumber", "address", "id"],
          },
          {
            model: db.Tour,
            as: "tourBooking",
            attributes: [
              "name",
              "price",
              "duration",
              "id",
              "startDates",
              "images",
            ],
          },
        ],
      });
      return { booking: booking, message: "Get all booking successfully" };
    } catch (error) {
      throw error;
    }
  },
  getBookingByIdService: async (id) => {
    try {
      const booking = await db.Booking.findOne({
        where: { id: id },
        include: [
          {
            model: db.Customer,
            as: "bookingCustomer",
            attributes: ["fullName", "email", "phoneNumber", "address", "id"],
          },
          {
            model: db.Tour,
            as: "tourBooking",
            attributes: [
              "name",
              "price",
              "duration",
              "id",
              "startDates",
              "images",
            ],
          },
        ],
      });
      return { booking: booking, message: "Get booking successfully" };
    } catch (error) {
      throw error;
    }
  },
  updateBookingByIdService: async (id, data) => {
    try {
      const booking = await db.Booking.findOne({
        where: { id: id },
      });
      if (!booking) {
        throw new Error("Booking not found");
      }
      await booking.update(data);
      return { message: "Update booking successfully" };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = bookingServices;
