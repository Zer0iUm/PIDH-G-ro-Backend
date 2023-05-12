module.exports = (sequelize, DataType) => {
	const ProductReviews = sequelize.define(
		'ProductReviews',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: DataType.STRING(45),
			rating: DataType.TINYINT(1),
			comment: DataType.STRING(300),
			comment_rating: DataType.INTEGER,
			product_id: DataType.INTEGER,
		},
		{
			timestamps: false,
			tableName: 'product_reviews',
		}
	);
	ProductReviews.associate = models => {
		ProductReviews.belongsTo(models.Product, {
			foreignKey: 'product_id',
			as: 'product',
		});
	};

	return ProductReviews;
};
