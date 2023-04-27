module.exports = (sequelize, DataType) => {
    const User_Address = sequelize.define('User_Address', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cep: DataType.INTEGER,
        city: DataType.STRING(45),
        state: DataType.STRING(20),
        street: DataType.STRING(45),
        number: DataType.INTEGER,
    }, {
        timestamps: false,
        tableName: 'user_address'
    })

    return User_Address
}