// Não utilizar essa tabela
module.exports = (sequelize, DataType) => {
	const Category = sequelize.define(
		'Category',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: DataType.STRING(45),
		},
		{
			timestamps: false,
			tableName: 'category',
		}
	);

	return Category;
};
