const express = require('express')
const app = express()

const db = require('./db.js')

app.get('/', async (req, res)=>{
    res.send('Voce por aqui??')
})
app.listen(8080)
 