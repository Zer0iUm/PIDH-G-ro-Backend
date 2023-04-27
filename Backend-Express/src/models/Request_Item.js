module.exports = (sequelize, DataType) => {
    const Request_Item = sequelize.define('Request_Item', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'request_item'
    })

    return Request_Item
}