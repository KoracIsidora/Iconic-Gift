const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const config = require("config");
const cors = require("cors");

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(cors());

// Set multer for pictures
app.use(multer({ dest: "./uploads" }).any());

// DB config
const db = config.get("mongoURI");

// Connect to mongoDb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use routes

app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
