require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const mongoose = require("mongoose");
const cors = require("cors");

const express = require("express");

const app = express();

//middleware
app.use(
  cors({
    origin: "https://reservation-clieant.onrender.com",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route
app.use("/api", require("./router/index"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));
