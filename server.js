// Importing express
const express = require('express');
const dotenv = require('dotenv');

// Config environment
dotenv.config();
// Creating instance of express
const app = express();
const port = process.env.PORT;

// Handling GET / Request
app.get('/', function (req, res) {
	res.send("Hello World!, I am server created by expresss");
	console.log("In root directory");
})

app.get('/user', function (req, res) {
	res.send("Hello user, I am listening");
	console.log("In user directory");
})
// Listening to server at port 3000
app.listen(port, function () {
	console.log(`server started at port ${port}`);
})