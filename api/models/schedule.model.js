const Schedule = (db, Sequelize) => {
	let table =  db.sequelize.define("schedule", {
		id : {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		date: {
			type: Sequelize.DATE
		}
	});
	table.belongsTo(db.User, {
		foreignKey: "user_id",
		targetKey: "id",
	})
	return table;
}

export default Schedule;