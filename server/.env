require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});