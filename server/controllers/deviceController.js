const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')

class DeviceController {
    async create(req, res) {
        const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4 + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const device = await Device.create({
            name,
            price,
            brandId,
            typeId,
            fileName
        })
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }

module.exports = new DeviceController()