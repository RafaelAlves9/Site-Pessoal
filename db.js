const Sequelize = require('sequelize')

const connecte = new Sequelize('alves', 'root', '152369Jr!', {
    host: 'localhost',
    dialect: 'mysql'
})

connecte.authenticate()
.then(()=>{
    console.log('conexão com banco de dados realizada com sucesso')
}).catch(()=>{
    console.log('Erro, conexão com banco de dados indisponível')
})


module.exports = connecte
