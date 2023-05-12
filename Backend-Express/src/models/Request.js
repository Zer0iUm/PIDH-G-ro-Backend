module.exports = (sequelize, DataType) => {
	const Request = sequelize.define(
		'Request',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: DataType.INTEGER,
			cart_id: DataType.INTEGER,
			status: DataType.BOOLEAN,
			total: DataType.DECIMAL(10, 2),
			shipment_dat: DataType.DATEONLY,
			created_at: DataType.DATE,
		},
		{
			timestamps: false,
			tableName: 'request',
		}
	);
	Request.associate = modelsList => {
		Request.belongsTo(modelsList.User, {
			foreignKey: 'user_id',
			as: 'user',
		});
		Request.belongsToMany(modelsList.Product, {
			foreignKey: 'product_id',
			as: 'requestItem',
			through: modelsList.RequestItem,
		});
		// Request.belongsTo(modelsList.Cart, {
		// 	foreignKey: 'cart_id',
		// 	as: 'cart',
		// 	through: modelsList.Cart,
		// });
	};

	return Request;
};
