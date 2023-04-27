module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataType.STRING(45),
        lastname: DataType.STRING(45),
        birthday: DataType.DATE,
        genre: DataType.STRING(20),
        cpf: DataType.INTEGER,
        email: DataType.STRING(100),
        password: DataType.STRING(16),
        is_admin: DataType.INTEGER,
    }, {
        timestamps: false,
        tableName: 'user'
    })

    return User
}