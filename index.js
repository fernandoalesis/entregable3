const express = require ('express')
/*const {ProductManager} = require('./productManager.js')

const productManager = new ProductManager('./products.json')
productManager.addProduct({title:'producto prueba',description:'Este es un producto de prueba',code:'abc123',price:123456,stock:25})

console.log(productManager.getProducts())*/

const app = express()

app.use(express.urlencoded({extended:true})) //para poder leer el body (req.body())
app.use(express.json())

const productList = [{ title: 'Escuadra1', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id:1 },
{title: 'Escuadra2', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id:2 },
{title: 'Escuadra3', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id:3 },
{title: 'Escuadra4', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id:4 },
{title: 'Escuadra5', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id:5 },
{title: 'Escuadra6', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id: 6 },
{title: 'Escuadra7', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id: 7 },
{title: 'Escuadra8', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id: 8 },
{title: 'Escuadra9', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id: 9 },
{title: 'Escuadra10', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',id: 10 },

]


app.get('/',(req, res)=>{
    res.send('hola mundo')
})
app.get('/products',(req, res)=>{
    res.send(productList)

})

app.get('/products/:pid',(req, res)=>{

    const { pid } = req.params

    const product = productList.find(product => product.id === parseInt(pid)) 

    //console.log('parametro:',req.params.pid)
    
    res.send(product)
    
})

app.listen(8080, error => {
    console.log('Escuchando en el puerto 8080')
})