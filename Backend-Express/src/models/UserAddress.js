module.exports = (sequelize, DataType) => {
	const UserAddress = sequelize.define(
		'UserAddress',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: DataType.INTEGER,
			cep: DataType.INTEGER,
			city: DataType.STRING(45),
			state: DataType.STRING(20),
			street: DataType.STRING(45),
			number: DataType.INTEGER,
		},
		{
			timestamps: false,
			tableName: 'user_address',
		}
	);
	UserAddress.associate = modelsList => {
		UserAddress.belongsTo(modelsList.User, {
			foreignKey: 'user_id',
			as: 'user',
		});
	};

	return UserAddress;
};
