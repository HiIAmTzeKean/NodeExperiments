// module.exports = (sequelize, Sequelize) => {
// 	const Tutorial = sequelize.define("tutorial", {
// 	  title: {
// 		type: Sequelize.STRING
// 	  },
// 	  description: {
// 		type: Sequelize.STRING
// 	  },
// 	  published: {
// 		type: Sequelize.BOOLEAN
// 	  }
// 	});
  
// 	return Tutorial;
//   };

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

module.exports = User;