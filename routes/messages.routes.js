const Router = require("express");
const router = new Router();
const messagesController = require("../controller/messages.controller");

router.get("/messages", messagesController.getMessages);
router.post("/message", messagesController.createMessage);

module.exports = router;
