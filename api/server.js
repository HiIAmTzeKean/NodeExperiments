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
app.use(logger('dev'))
app.use(cors());

db.sequelize.sync({ force: true }).then(() => {
	console.log("Drop and re-sync db.");
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});

// Set up static
app.use("/", express.static(path.join(__dirname, 'api', 'favicon.ico')));

// Handling GET / Request
app.get('/', (req, res) => {
	return res.status(200).send("return template after query");
})

app.get('/points', (req, res) => {
	const {Person} = require('./public/data');
	return res.status(200).send("return template after query");
})

app.get('/updateDuty', (req, res) => {
	res.send("update duty page");
})

app.put("/updateDuty/:personA/:personB", (req,res) => {
	// req.params.personA
})

app.get('/uploadExcelSheet', (req, res) => {
	res.send("Excel sheet page");
})

app.get('/api/v1/duty/query', (req,res) => {
	// req.query
})

/**
 * Route for getting a single person
 */
app.get('/api/v1/person/:id', (req,res) => {
	const {Person} = require('./public/data');
	return res.status(200).send(Person);
})

/**
 * Route for getting all persons
 */
app.get('/api/v1/person/', (req,res) => {
	const {Person} = require('./public/data');
	return res.status(200).send(Person);
})

app.all("*", (req,res) => {
	res.status(404).send("Resource not found");
})

// Listening to server at port 3000
app.listen(port, () => {
	console.log(`server started at port ${port}`);
})