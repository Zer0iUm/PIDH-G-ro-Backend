module.exports = (sequelize, DataType) => {
    const Cart = sequelize.define('Cart', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        total: DataType.DECIMAL(10, 2),
        status: DataType.TINYINT(1),
        shipment_price: DataType.DECIMAL(10, 2),
    }, {
        timestamps: false,
        tableName: 'cart'
    })

    return Cart
}