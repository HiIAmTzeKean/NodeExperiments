import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import dotenv from 'dotenv';
import User from "./user.model.js";
import Schedule from "./schedule.model.js";
dotenv.config();

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {Sequelize, sequelize};

const dbInit = async() =>  {
	db.Sequelize = Sequelize;
	db.sequelize = sequelize;
	db.User = User(sequelize, Sequelize);
	db.Schedule = Schedule(sequelize,Sequelize);


	db.sequelize.authenticate().then(() => {
		console.log('Connection has been established successfully.');
	}).then(()=>{
		db.sequelize.sync({ force: true })
	}).then(() => {
		console.log("Drop and re-sync db.");
	}).catch((error) => {
		console.error('Unable to connect to the database: ', error);
	});
}

dbInit()

if (process.env.environment == "dev") {
	// add dummy data
	(async() => {
		await db.User.create({
			name: "John",
			points: 1,
		});
		console.log("INSERT START");
	})();
}

export default db;