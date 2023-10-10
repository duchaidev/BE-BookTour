const tourServices = require("../services/tourServices");

let tourController = {
  getAllTour: async (req, res) => {
    try {
      const tours = await tourServices.getAllTourService();
      res.status(200).json(tours);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  getOneTour: async (req, res) => {
    try {
      let tour = await tourServices.getOneTourService(req.params.id);
      res.status(200).json(tour);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  createTour: async (req, res) => {
    try {
      let tour = await tourServices.createTourService(req.body);
      res.status(200).json(tour);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  updateTour: async (req, res) => {
    try {
      let tour = await tourServices.updateTourService(req.body, req.params.id);
      res.json(tour);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  deleteTour: async (req, res) => {
    try {
      let tour = await tourServices.deleteTourService(req.params.id);
      res.json(tour);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
};

module.exports = tourController;
