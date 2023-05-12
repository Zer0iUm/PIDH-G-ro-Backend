module.exports = (sequelize, DataType) => {
	const ProductType = sequelize.define(
		'ProductType',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			// category_id: DataType.INTEGER,
			name: DataType.STRING(45),
		},
		{
			timestamps: false,
			tableName: 'product_type',
		}
	);
	ProductType.associate = modelsList => {
		ProductType.hasMany(modelsList.Product, {
			foreignKey: 'product_type_id',
			as: 'product',
		});
	};

	return ProductType;
};
