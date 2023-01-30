'use strict'

module.exports = (app => {
    let myjson = require('./controller')

    app.route('/')
        .get(myjson.index)

    app.route('/tampil')
        .get(myjson.tampilSemua)

    app.route('/tampilById/:id')
        .get(myjson.tampilById)
})

