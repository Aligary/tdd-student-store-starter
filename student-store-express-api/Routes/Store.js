const express = require("express")
const router = express.Router()
const Store = require("../Model/Store")
const {BadRequestError, NotFoundError} = require("../Utils/errors")
router.use(express.json())
let id = 0;
const {storage} = require("../data/storage")

router.get("/", async(req, res, next) => {
    try{
        const products = await Store.listProducts()
        res.status(200).json({ "products": products })
    }catch(err){
        next(err)
    }
})

// router.get("/2", async(req, res, next) => {
//     res.status(200).json({"ping": "pong"})
//   })

router.get("/:productId", async(req, res, next) => {
    try{
        const id = Number(req.params.productId)
        const product = await Store.fetchById(id)
        if(!product) {
            throw new NotFoundError("No Product Found")
        }
        res.status(200).json({ "product": product })
    }catch(err){
        next(err)
    }
})

router.post("/", async(req, res, next) => {
    try{
        const newCart = req.body.shoppingCart
        const newUser = req.body.user
        if(!newCart || !newUser) {
            return next(new BadRequestError("No order found in request."))
        }
        if(!newCart.quantity || !newCart.itemId) {
            return next(new BadRequestError("No user found in request."))
        }

        id += 1;
        let price = 0;
        let totalPrice = 0.0;
        newCart.map((e) => {
            price = storage.get("products").find({id:e.id}).value().price
            totalPrice = totalPrice + (price*e.quantity)
        })

        let tax = (totalPrice*0.0875)
        totalPrice = (totalPrice + tax).toFixed(2)
        

        let purchase = {
            id: id,
            name: newUser.name,
            email: newUser.email,
            order: newCart,
            total: totalPrice,
            createdAt: new Date().toISOString()
        }

        const order = await Store.createOrder(purchase)
        res.status(201).json({ "purchase": order })
        
    }catch(err){
        next(err)
    }
})

module.exports = router