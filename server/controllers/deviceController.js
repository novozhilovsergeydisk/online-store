const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, rating, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const data = {
                name,
                price,
                rating,
                brandId,
                typeId,
                img: fileName
            }

            console.log(data)

            const device = await Device.create(data)

            // return res.json(device)

            return res.json({test: 'J', 'img': fileName})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()