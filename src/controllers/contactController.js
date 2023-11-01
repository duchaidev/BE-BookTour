const contactServices = require("../services/contactServices");
let contactController = {
  getAllContact: async (req, res) => {
    try {
      const contacts = await contactServices.getAllContactService();
      res.status(200).json(contacts);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  createContact: async (req, res) => {
    try {
      const contact = await contactServices.createContactService(req.body);
      res.status(200).json(contact);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
  updateContact: async (req, res) => {
    try {
      let contact = await contactServices.updateContactService(
        req.body,
        req.params.id
      );
      res.json(contact);
    } catch (e) {
      const statusCode = e.statusCode || 500;
      return res.status(statusCode || 500).send(e.message);
    }
  },
};

module.exports = contactController;
