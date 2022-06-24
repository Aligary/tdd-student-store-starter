
const {storage} = require("../data/storage")

class Store{
    static async listProducts() {

      const products = storage.get("products").orderBy("id", "asc")
      return products
    }

    static async fetchById(id) {
      const product = storage.get("products").find({id}).value()

      return product
        
    }

    static async createOrder(order) {
      const newOrder = {...order}
      storage.get("purchases").push(newOrder).write()
      return newOrder
    }
}

module.exports = Store