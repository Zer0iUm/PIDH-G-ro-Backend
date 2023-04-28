module.exports = (sequelize, DataType) => {
    const ProductType = sequelize.define('ProductType', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_id: DataType.INTEGER,
        name: DataType.STRING(45),
    }, {
        timestamps: false,
        tableName: 'product_type'
    })

    return ProductType
}