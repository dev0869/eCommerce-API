const Connect = require('./database/Connect')
const Schema = require('./Models/Product')
const Product = require('./product.json')



const start = async () => {
    try {
        await Connect();
        await Schema.deleteMany();
        await Schema.create(Product)
        console.log('success')
    } catch (error) {
        console.log(error)
    }

}
start();



