const User = (db, Sequelize) => {
	let table = db.sequelize.define("user", {
		id : {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		point: {
			type: Sequelize.INTEGER
		}
	});
	
	return table;
}

export default User;