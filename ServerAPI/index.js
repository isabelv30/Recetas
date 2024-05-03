const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

app.use(cors())

const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recetas'
}

app.get('/', (req, res) => {
    res.send('Prueba ruta root')
})

app.get('/recetas', (req, res) => {
    var connection = mysql.createConnection(credentials)
    connection.query('SELECT * FROM RECETA', (error, result) => {
        if(error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
    connection.end()
})

app.get('/comentarios', (req, res) => {
    var connection = mysql.createConnection(credentials)
    connection.query('SELECT * FROM COMENTARIO', (error, result) => {
        if(error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
    connection.end()
})

app.listen(4000, ()=>console.log('API Running'))
