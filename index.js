const express = require ('express')

const app = express()

app.get('/',(req, res)=>{
    res.send('hola')
})

app.listen(8080, error => {
    console.log('Escuchando en el puerto 8080')
})