module.exports = (sequelize, DataType) => {
    const Cart = sequelize.define('Cart', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: DataType.INTEGER,
        total: DataType.DECIMAL(10, 2),
        status: DataType.BOOLEAN,
        shipment_price: DataType.DECIMAL(10, 2),
    }, {
        timestamps: false,
        tableName: 'cart'
    })

    return Cart
}