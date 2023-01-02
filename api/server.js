// Importing express
const express = require('express');
const dotenv = require('dotenv');
const path = require("path");

// Set up middleware
const logger = require("morgan");
const favicon = require("serve-favicon");
const cors = require("cors");
const db = require(path.join(__dirname, 'models', "index.js"));

// Config environment
dotenv.config();

// Creating instance of express
const app = express();
const port = process.env.PORT;

// config middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger("dev"))
app.use(cors());

// Set up static
app.use("/", express.static(path.join(__dirname, 'api', 'favicon.ico')));

var userRouter = require("./routes/user");
app.use("/api/v1/user/", userRouter);

var scheduleRouter = require("./routes/schedule");
app.use("/api/v1/schedule/", scheduleRouter);

app.all("*", (req,res) => {
	res.status(404).send("Resource not found");
})

// Listening to server at port 3000
app.listen(port, () => {
	console.log(`server started at port ${port}`);
})