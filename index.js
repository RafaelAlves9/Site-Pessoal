const express = require('express')
const app = express()


const mysql = require('mysql')
const { userInfo } = require('os')
const { connected } = require('process')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '152369Jr',
    database: 'nodee'
})
connection.connect((err)=>{
    if(err){
        console.error('error connecting'+err.stack)
        return
    }
    console.log('erro, as id' + connection.threadId)
})


app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/dados.html')
})
app.listen(8080)
 