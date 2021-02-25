//Model Imports
require("./src/models/SerialKey");

//Plugin Imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//Route Imports
const authRoutes = require("./src/routes/authRoutes");

//App Initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(authRoutes);

//Mongo DB Connection String and Info
var mongoUri = "";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log(`Successfully connected to Mongodb Dev server`);
});

mongoose.connection.on("err", (err) => {
  console.error("Error connecting to mongodb", err);
});

app.get("/", (req, res) => {
  res.send(`Don't be Evil`);
});

app.listen(3001, () => {
  console.log(`----------- Starting Melvins HTTP on Port 3001 ----------- `);
});
