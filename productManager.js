
import fs from 'fs'




  export class ProductManager {
    

    constructor(path) {
        this.path = path
    }

    readFile = async () => {

        try {
            const dataJson = await fs.promises.readFile(this.path, 'utf-8')
            return JSON.parse(dataJson)

        } catch (error) {

            console.log(error)
            return []

        }
    }

    addProduct = async (product) => {
        try {

            const productsDataBase = await this.readFile()

            const codeCreated = productsDataBase.find(article => product.code === article.code)

            if (codeCreated) return 'El código que intenta cargar ya existe en la base'

            if (productsDataBase.length === 0) {
                product.id = 1  
            } else {
                product.id = productsDataBase[productsDataBase.length - 1].id + 1
            }   

            product.timestamp = Date.now()  


            productsDataBase.push(product)

            await fs.promises.writeFile(this.path, JSON.stringify(productsDataBase, null, '\t'), 'utf-8')

            return productsDataBase
            
        } catch (error) {
            console.log(error)
        }
    }

    getProducts = async () => {

        try {
            const productsDataBase = await this.readFile()

            return productsDataBase
    }   

        catch (error) {

            console.log(error)

        }}

    getProductById = async (pid) => {

        try {

            const productsDataBase = await this.readFile()

            const chargedId = productsDataBase.find(article => article.id === parseInt(pid))

            if (!chargedId) return 'No se registra ningún producto con ese ID'

            return chargedId

        } catch (error) {

            throw new Error("Not found");

        }
    }

    getProductsLimit = async (limit) => {

        try {

            const productsDataBase = await this.readFile()

            if (limit > 0 && limit <= productsDataBase.length) {

                const prodsLimit = []

                for (let i = 0; i < parseInt(limit); i++) {

                    prodsLimit.push(productsDataBase[i])

                }

                return prodsLimit

            } else {

                return productsDataBase

            }

        } catch (error) {

            console.log(error)

        }
    }

    updateProduct = async (pid, producToUpdate) => {

        try {

            const productsDataBase = await this.readFile()

            const checkId = productsDataBase.findIndex((article) => article.id === parseInt(pid))

            //console.log('El indice es: ', checkId)

            if (checkId < 0) {
                //throw new Error('No existe el producto')
                return (Error, 'No existe producto con el ID indicado')
            }

            //console.log(productsDataBase[checkId])

            productsDataBase[checkId] = {

                ...productsDataBase[checkId],
                ...producToUpdate,

            }

            await fs.promises.writeFile(this.path, JSON.stringify(productsDataBase, null, '\t'), 'utf-8')

            return productsDataBase

        } catch (error) {

            console.log(error)

        }
    }


    deleteProduct = async (pid) => {
        try {

            const productsDataBase = await this.readFile()

            const checkId = productsDataBase.findIndex((article) => article.id === parseInt(pid))

            //console.log('El indice es: ', checkId)

            if (checkId < 0) {
            //if (checkId === undefined) {
                //throw new Error('No existe el producto')
                return (Error, 'No existe el producto')
            }

            const newDataBase = productsDataBase.filter((tempProduct) => tempProduct.id !== parseInt(pid))

            await fs.promises.writeFile(this.path, JSON.stringify(newDataBase, null, '\t'), 'utf-8')

            //return productsDataBase

            return (await this.readFile())

        } catch (error) {

            console.log(error)

        }
    }
}

const pm = new ProductManager('./products.json')

pm.addProduct({title: 'Escuadra1', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',code: 1})
pm.addProduct({title: 'Escuadra2', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',code: 2})
pm.addProduct({title: 'Escuadra3', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',code: 3})
pm.addProduct({title: 'Escuadra4', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',code: 4})
pm.addProduct({title: 'Escuadra5', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',code: 5})
pm.addProduct({title: 'Escuadra6', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-512.png',code: 6})

