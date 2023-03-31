const db = require('../db');
const { checkForEmptyness, checkName } = require('../helper/messages.validator');

class MessagesController {
  async createMessage(req, res, next) {
    try {
      const {name, text, date} = req.body;
      
      if (!checkForEmptyness(name) || !checkForEmptyness(text) || !checkForEmptyness(date)) {
        return res.status(400).json({ error: "One or more fields are empty" });
      }
      
      if (!checkName(name)) {
        return res.status(400).json({ error: "Name can only contain latin symbols, numbers, '_', and '-'" });
      }
      
      const newMessage = await db.query(`INSERT INTO messages (name, text, date) values ($1, $2, $3) RETURNING *`, [name, text, date])
      
      res.status(201).json(newMessage.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Server error'});
    }
  }

  async getMessages(req, res, next) {
    try {
      const messages = await db.query('SELECT * FROM messages');
      res.json(messages.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Server error'});
    }
  }
}

module.exports = new MessagesController();
