module.exports = (sequelize, DataType) => {
	const Cart = sequelize.define(
		'Cart',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: DataType.INTEGER,
			total: DataType.DECIMAL(10, 2),
			status: DataType.BOOLEAN,
			shipment_price: DataType.DECIMAL(10, 2),
		},
		{
			timestamps: false,
			tableName: 'cart',
		}
	);
	Cart.associate = modelsList => {
		Cart.belongsTo(modelsList.User, {
			foreignKey: 'user_id',
			as: 'user',
		});
		Cart.belongsToMany(modelsList.Product, {
			foreignKey: 'product_id',
			as: 'cartItem',
			through: modelsList.CartItem,
		});
	};

	return Cart;
};
