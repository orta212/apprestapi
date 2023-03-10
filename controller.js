'use strict'

let response = require('./res')
let connection = require('./koneksi')

exports.index = ((req, res) => {
    response.ok("Aplikasi REST API berjalan!", res)
})

//menampilkan semua data
exports.tampilSemua = ((req, res) => {
    connection.query('SELECT * FROM mahasiswa',
    ((error, rows, fields) => {
        if (error) connection.log(error)
        else response.ok(rows, res)
    }))
})

//menampilkan semua mahasiswa berdasarkan id 
exports.tampilById = ((req, res) => {
    let id = req.params.id
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], 
    ((error, rows, fields) => {
        if (error) console.log(error)
        else response.ok(rows, res)
    }))
})

//menambah mahasiswa
exports.tambahMhs = ((req, res) => {
    let nama = req.body.nama
    let nim = req.body.nim
    let jurusan = req.body.jurusan
    connection.query('INSERT INTO mahasiswa VALUES(?,?,?,?)', ['',nim, nama, jurusan], 
    ((error, rows, fields) => {
        if (error) connection.log(error)
        else response.ok("Berhasil Menambahkan Data", res)
    }))
})

//mengubah mahasiswa
exports.ubahMhs = ((req, res) => {
    let id = req.body.id
    let nama = req.body.nama
    let nim = req.body.nim
    let jurusan = req.body.jurusan
    connection.query('UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE id_mahasiswa = ?', [nim, nama, jurusan, id], 
    ((error, rows, fields) => {
        if (error) connection.log(error)
        else response.ok("Berhasil Mengubah Data", res)
    }))
})

//menghapus mahasiswa
exports.hapusMhs = ((req, res) => {
    let id = req.body.id
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa = ?', [id], 
    ((error, rows, fields) => {
        if (error) connection.log(error)
        else response.ok("Berhasil Menghapus Data", res)
    }))
})