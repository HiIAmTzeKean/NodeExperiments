import express from 'express';
import path from "path";
import db from "../models/index.js";
// var express = require("express");
const router = express.Router();

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

export default router