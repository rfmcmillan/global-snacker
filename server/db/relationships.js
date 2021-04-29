//Models imported from Model folder
const Order = require('./models/Order')
const Product = require('./models/Product')
const ProductOrders = require('./models/ProductOrders')
const Category = require('./models/Category')
const User = require('./models/User')
const Review = require('./models/Review')

Category.belongsToMany(Product, {
    through: 'productcategories',
    timestamps: false,
})
Product.belongsToMany(Category, { through: 'productcategories' })

Product.belongsToMany(Order, {
    through: ProductOrders,
    foreignKey: 'productId',
})
Order.belongsToMany(Product, { through: ProductOrders, foreignKey: 'orderId' })

//User.hasMany(Order)

Review.belongsTo(User)
User.hasMany(Review)

Product.hasMany(Review)
Review.belongsTo(Product)

module.exports = { Order, Product, ProductOrders, Category, User, Review }
