const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db.js')

//configurando body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//criando servidor POST
app.post('/form', async (req, res)=>{
    res.send('Aqui estão seus dados:')
    req.body.nome
    req.body.email
    req.body.mensagem
})
app.listen(8080)
 