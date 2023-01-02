var express = require("express");
var router = express.Router();
const path = require("path");
const db = require(path.join(__dirname, "..", "models", "index.js"));

router.get("/", function(req, res, next) {
	db.Schedule.findAll().then(res => {
		console.log(res)
	}).catch((error) => {
		console.error('Failed to retrieve data : ', error);
	});
	return res.status(200).send("Done");
});

 router.get('/updateSchedule/:userA/:userB', (req,res) => {
	return res.status(200).send("Done");
})

module.exports = router;