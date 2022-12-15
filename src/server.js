// Importing express
const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const favicon = require("serve-favicon");

// Config environment
dotenv.config();
// Creating instance of express
const app = express();
const port = process.env.PORT;

// Set up static
app.use(express.static("./src/public"));

// Set favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Handling GET / Request
app.get('/', (req, res) => {
	res.status(200)
	res.sendFile(path.resolve(__dirname, "./public/index.html"));
	console.log("In root directory");
})

app.get('/points', (req, res) => {
	res.send("student points page");
})

app.get('/updateDuty', (req, res) => {
	res.send("update duty page");
})

app.get("/updateDuty/:personA/:personB", (req,res) => {
	// req.params.personA
})

app.get('/uploadExcelSheet', (req, res) => {
	res.send("Excel sheet page");
})

app.all("*", (req,res) => {
	res.status(404).send("Resource not found");
})

// Listening to server at port 3000
app.listen(port, () => {
	console.log(`server started at port ${port}`);
})