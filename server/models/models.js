const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const __INT = DataTypes.INTEGER
const __STRING = DataTypes.STRING

console.log(__INT)

const User = sequelize.define('user',{
    id: {
        type: __INT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: __STRING,
        unique: true
    },
    password: {
        type: __STRING
    },
    role: {
        type: __STRING,
        defaultValue: "USER"
    }
})

const Basket = sequelize.define('basket',{
    id: {type: __INT, primaryKey: true, autoIncrement: true}
})

const BasketDevice = sequelize.define('basket_device',{
    id: {type: __INT, primaryKey: true, autoIncrement: true}
})

const Device = sequelize.define('device',{
    id: {type: __INT, primaryKey: true, autoIncrement: true},
    name: {type: __STRING, unique: true, allowNull: false},
    price: {type: __INT, allowNull: false},
    rating: {type: __INT, defaultValue: 0},
    img: {type: __STRING, allowNull: false}
})

const Type = sequelize.define('type',{
    id: {type: __INT, primaryKey: true, autoIncrement: true},
    name: {type: __STRING, unique: true, allowNull: false}
})

const Brand = sequelize.define('brand',{
    id: {type: __INT, primaryKey: true, autoIncrement: true},
    name: {type: __STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('rating',{
    id: {type: __INT, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const DeviceInfo = sequelize.define('device_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: __STRING, allowNull: false},
    description: {type: __STRING, unique: true, allowNull: false}
})

const TypeBrand = sequelize.define('type_brand',{
    id: {type: __INT, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}

