module.exports = (sequelize, DataType) => {
    const Request = sequelize.define('Request', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: DataType.TINYINT(1),
        total: DataType.DECIMAL(10, 2),
        shipment_dat: DataType.DATE,
        created_at: DataType.DATE
    }, {
        timestamps: false,
        tableName: 'request'
    })

    return Request
}