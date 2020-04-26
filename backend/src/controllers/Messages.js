const Message = require("../models/Message");

class MessagesController {
  async getAllMessages() {
    const messages = await Message.find({});
    return messages;
  }

  async addMessage(content, author) {
    await Message.create({ content, author });
  }
}

module.exports = new MessagesController();
