const db = require("../models");
const TelegramBot = require("node-telegram-bot-api");
// const Agent = require("socks5-https-client/lib/Agent");

const token = "6900769026:AAFfFQ3SSEvBPDJY3RZZlVf7L_9n3dludhY";

let contactServices = {
  getAllContactService: async () => {
    try {
      const contacts = await db.Contact.findAll();
      return { data: contacts, message: "Get Contact successfully" };
    } catch (e) {
      throw e;
    }
  },
  createContactService: async (data) => {
    try {
      await db.Contact.create({
        fullName: data.fullName,
        address: data.address || "",
        numberPhone: data.numberPhone || "",
        email: data.email || "",
        message: data.message,
        status: false,
      });
      //   const bot = new TelegramBot(token, {
      //     polling: false,
      //     // request: {
      //     //   agentClass: Agent,
      //     //   agentOptions: {
      //     //     socksHost: "Your socks Host",
      //     //     socksPort: "Your socks Port",
      //     //   },
      //     // },
      //   });
      //   bot.onText(/\/echo (.+)/, (msg, match) => {
      //     // 'msg' is the received Message from Telegram
      //     // 'match' is the result of executing the regexp above on the text content
      //     // of the message

      //     const chatId = msg.chat.id;
      //     const resp = match[1]; // the captured "whatever"

      //     // send back the matched "whatever" to the chat
      //     bot.sendMessage(chatId, resp);
      //   });

      //   // Listen for any kind of message. There are different kinds of
      //   // messages.
      //   bot.on("message", (msg) => {
      //     const chatId = msg.chat.id;

      //     // send a message to the chat acknowledging receipt of their message
      //     bot.sendMessage(chatId, "Received your message");
      //   });
      //   bot.on("polling_error", (msg) => console.log(msg));
      // Send a message
      //   bot.sendMessage(
      //     "5760012591",
      //     "Hello, this is an automated message from your bot."
      //   );
      return { message: "Create contact successfully" };
    } catch (e) {
      throw e;
    }
  },
  updateContactService: async (data, id) => {
    try {
      let contact = await db.Contact.findByPk(id);
      if (!contact) {
        throw { message: "contact not found" };
      }
      contact.update(
        {
          ...data,
        },
        { where: { id: id } }
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
};
module.exports = contactServices;
