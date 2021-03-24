const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3010;
const MONGODB_URL = process.env.MONGODB_URL;

// database
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>
  console.log("Connected to MongoDB Job Application Assist Database")
);

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
const snippetsRouter = require("./routes/resumeSnippets");
app.use("/resumesnippets", snippetsRouter);

// server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
