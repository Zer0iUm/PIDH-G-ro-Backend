module.exports = (sequelize, DataType) => {
    const Product_Reviews = sequelize.define('Product_Reviews', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataType.STRING(45),
        rating: DataType.TINYINT(1),
        comment: DataType.STRING(300),
        comment_rating: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'product_reviews'
    })

    return Product_Reviews
}