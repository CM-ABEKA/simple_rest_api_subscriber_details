require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connecting server to environment database instance
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// configuring app to accept JSON files
app.use(express.json());

//setting up routes
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

//setting server to listen to a port
app.listen(3000, () => console.log("Server has Started"));
