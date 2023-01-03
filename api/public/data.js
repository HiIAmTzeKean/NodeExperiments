import db from "../models/index.js";

const initData = () => {
	const Person =  [
		{name: "Larry", point: 0},
		{name: "John", point: 0},
		{name: "Peter", point: 0}
	];

	const Schedule = [
		{userId:0, date: new Date("2021-09-30")},
		{userId:1, date: new Date("2021-09-30")},
		{userId:0, date: new Date("2021-12-30")},
		{userId:2, date: new Date("2021-12-30")},
	];

	db.User.bulkCreate(Person).then(() => console.log("Users data have been saved"));
	db.Schedule.bulkCreate(Schedule).then(() => console.log("Schedule data have been saved"));
}
export default initData;