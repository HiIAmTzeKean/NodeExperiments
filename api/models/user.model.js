const User = (sequelize, Sequelize) => {
	return sequelize.define("user", {
		name: {
			type: Sequelize.STRING
		},
		points: {
			type: Sequelize.INTEGER
		}
	});
}

export default User;