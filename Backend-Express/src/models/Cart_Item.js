module.exports = (sequelize, DataType) => {
    const Cart_Item = sequelize.define('Cart_Item', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    }, {
        timestamps: false,
        tableName: 'cart_item'
    })

    return Cart_Item
}