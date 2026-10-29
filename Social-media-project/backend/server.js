

const express = require("express");
const cors = require("cors");
const uploadRoute = require("./routes/upload");
const controller=require("./routes/controller")

const app = express();
const port = 5000;

app.use(cors());
app.use("/api", uploadRoute);
app.use("/api", controller);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});