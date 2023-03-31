const express = require("express");
const cors = require('cors')

const messageRouter = require("./routes/messages.routes");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api", messageRouter);
app.listen(PORT, () => console.log(`server started on ${PORT}`));
