module.exports = (sequelize, DataType) => {
    const Request = sequelize.define('Request', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: DataType.INTEGER,
        cart_id: DataType.INTEGER,
        status: DataType.BOOLEAN,
        total: DataType.DECIMAL(10, 2),
        shipment_dat: DataType.DATEONLY,
        created_at: DataType.DATE
    }, {
        timestamps: false,
        tableName: 'request'
    })

    return Request
}