module.exports = (sequelize, DataType) => {
    const CartItem = sequelize.define('CartItem', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cart_id: DataType.INTEGER,
        product_id: DataType.INTEGER,
        quantity: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'cart_item'
    })

    return CartItem
}