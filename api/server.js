// Importing express
import express from 'express';
import dotenv from 'dotenv';
import path from "path";

// Set up middleware
import logger from "morgan";
import favicon from "serve-favicon";
import cors from "cors";
import db from "./models/index.js";

// Config environment
dotenv.config();

// Creating instance of express
const app = express();
const port = process.env.PORT;

// config middleware
app.use(favicon("./public/favicon.ico"))
app.use(logger("dev"))
app.use(cors());

// Set up static
app.use("/", express.static("./public/favicon.ico"));

import userRouter from "./routes/user.js";
app.use("/api/v1/user/", userRouter);

import scheduleRouter from "./routes/schedule.js";
app.use("/api/v1/schedule/", scheduleRouter);

app.all("*", (req,res) => {
	res.status(404).send("Resource not found");
})

// Listening to server at port 3000
app.listen(port, () => {
	console.log(`server started at port ${port}`);
})