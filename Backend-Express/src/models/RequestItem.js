module.exports = (sequelize, DataType) => {
    const RequestItem = sequelize.define('RequestItem', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        request_id: DataType.INTEGER,
        product_id: DataType.INTEGER,
        quantity: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'request_item'
    })

    return RequestItem
}