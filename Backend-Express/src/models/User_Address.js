module.exports = (sequelize, DataType) => {
    const User_Address = sequelize.define('User_Address', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataType.STRING(45),
        price: DataType.DECIMAL(10, 2),
        type: DataType.STRING(45),
        image: DataType.STRING(100),
        description: DataType.STRING(1000),
        rating: DataType.TINYINT,
        abv: DataType.INTEGER,
        ibu: DataType.INTEGER,
        type_glass: DataType.STRING(45),
        id_product_type: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'user_address'
    })

    return User_Address
}