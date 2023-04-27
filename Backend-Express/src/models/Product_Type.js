module.exports = (sequelize, DataType) => {
    const Product_Type = sequelize.define('Product_Type', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataType.STRING(45),
    }, {
        timestamps: false,
        tableName: 'product_type'
    })

    return Product_Type
}