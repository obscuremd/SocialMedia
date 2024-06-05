const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("./roots/users");
const authRoute = require("./roots/auth");
const postRoute = require("./roots/post");
const commentRoute = require("./roots/comment");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8800;

// connect to mongoDB
mongoose.connect(process.env.MONGO_URL);
// event handling if the connection is successful
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// event handling if the connection fails
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

app.listen(PORT, () => {
  console.log("server running");
});
