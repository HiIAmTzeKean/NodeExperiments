const Schedule = (sequelize, Sequelize) => {
	return sequelize.define("schedule", {
		userId: {
			type: Sequelize.STRING
		},
		date: {
			type: Sequelize.DATE
		}
	});
}

export default Schedule;