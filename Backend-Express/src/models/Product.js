module.exports = (sequelize, DataType) => {
	const Product = sequelize.define(
		'Product',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: DataType.STRING(45),
			price: DataType.DECIMAL(10, 2),
			type: DataType.STRING(45),
			image: DataType.STRING(100),
			description: DataType.STRING(1000),
			rating: DataType.TINYINT(1),
			abv: DataType.INTEGER,
			ibu: DataType.INTEGER,
			type_glass: DataType.STRING(45),
			product_type_id: DataType.INTEGER,
		},
		{
			timestamps: false,
			tableName: 'product',
		}
	);

	Product.associate = modelsList => {
		Product.belongsTo(modelsList.ProductType, {
			foreignKey: 'product_type_id',
			as: 'productType',
		});
		Product.belongsToMany(modelsList.Order, {
			foreignKey: 'request_id',
			as: 'request',
			through: modelsList.RequestItem,
		});
		Product.belongsToMany(modelsList.Order, {
			foreignKey: 'cart_id',
			as: 'cart',
			through: modelsList.CartItem,
		});
		Product.hasMany(models.ProductReview, {
			foreignKey: 'product_id',
			as: 'reviews',
		});
	};

	return Product;
};
