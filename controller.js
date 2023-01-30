'use strict'

let response = require('./res')
let connection = require('./koneksi')

exports.index = ((req, res) => {
    response.ok("Aplikasi REST API berjalan!", res)
})