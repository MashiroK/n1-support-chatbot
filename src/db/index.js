const config = require('config')
const mongoose = require('mongoose')

const conn = mongoose.createConnection(config.get( 'mongo.con' ))

//Model Name, Schema Name, Collection
const Report = conn.model('Report', require("../schemas/userReportSchema"))
const Nickname = conn.model('Nickname', require("../schemas/nicknameSchema"))
const Platform = conn.model('Platform', require("../schemas/platformSchema"))

module.exports = {
    Nickname,
    Platform,
    Report,
}