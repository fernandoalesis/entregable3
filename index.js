import express from 'express'
import {ProductManager} from './productManager.js'


const productManager = new ProductManager('./products.json')


const app = express()

app.use(express.urlencoded({extended:true})) //para poder leer el body (req.body())
app.use(express.json())



app.get('/',(req, res)=>{
    res.send('hola mundo')
})
app.get('/products', async(req, res)=>{

    
    const { limit } = req.query

    if (limit === undefined || limit < 0 || isNaN(limit)) {

        res.send(await productManager.getProducts())

    } else {

        res.send(await productManager.getProductsLimit(limit))

    }
    

    

})

app.get('/products/:pid', async (req, res) => {

    const { pid } = req.params

    res.send(await productManager.getProductById(pid))

})


app.listen(8081, error => {
    console.log('Escuchando en el puerto 8080')
})