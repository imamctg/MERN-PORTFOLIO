const express = require("express");
const app = express();
require("dotenv").config();

const dbConfig = require("./config/dbConfig");
const portfoliioRoute = require("./routes/portFolioRoute");

app.use(express.json());
app.use("/api/portfolio", portfoliioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
