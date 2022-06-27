import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Logo from "../Logo/Logo"
import NotFound from "../NotFound/NotFound"
import ProductCard from "../ProductCard/ProductCard"
import ProductDetail from "../ProductDetail/ProductDetail"
import ProductView from "../ProductView/ProductView"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import Footer from "../Footer/Footer"
import { useState, useEffect } from "react"
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import About from "../About/About"
import axios from "axios"
import Contact from "../Contact/Contact"


export default function App() {
  let [products, setProducts] = useState([]);
  let [isFetching, setIsFetching] = useState(false);
  let [error, setError] = useState("");
  let [isOpen , setIsOpen ] = useState(false);
  let [shoppingCart , setShoppingCart ] = useState([]);
  let [checkoutForm  , setCheckoutForm  ] = useState({name: "", email: ""});
  let [search, setSearch] = useState("");
  let [subTotal, setSubTotal] = useState(0);
  let [success, setSuccess] = useState(false)
  let [receipt, setReceipt] = useState({
    id: 0, name: "", email: "", order: {}, total:0.0
  });

   function getProducts() {
    setIsFetching(true)
    const res =  axios.get("http://localhost:3001/store")
    .then((e) => {
      setProducts(e.data.products)
      setIsFetching(false)
    })
    .catch(() => {
      setError("Error")
    })
  }

  useEffect(() => {getProducts()}, [] )

  function handleOnToggle() {
    if(isOpen)
      setIsOpen(false)
    else
      setIsOpen(true)
  }



  function handleAddItemToCart(productId) {
      if (shoppingCart.findIndex(e => e.itemId == productId) !== -1){
        shoppingCart[shoppingCart.findIndex(e => e.itemId == productId)].quantity += 1;
      } 
      else {
        setShoppingCart(state => [...state, {itemId: productId, quantity: 1}])
      }
      const product = products.find(product => {
        return product.id == productId;
      });
      setSubTotal(subTotal + product.price)
    

  }

  function handleRemoveItemFromCart(productId) {
    if (shoppingCart.findIndex(e => e.itemId == productId) !== -1){
      shoppingCart[shoppingCart.findIndex(e => e.itemId == productId)].quantity -= 1;
    } 
    if(shoppingCart[shoppingCart.findIndex(e => e.itemId == productId)].quantity === 0) {
      shoppingCart.splice([shoppingCart.findIndex(e => e.itemId == productId)], 1)
    }

    const product = products.find(product => {
      return product.id == productId;
    });
    setSubTotal(subTotal - product.price)
  }

  function handleOnCheckoutFormChange(name, value) {
    if(name == "name") {
      setCheckoutForm(state => ({...state, [name]: value }))
    }
    if(name == "email") {
      setCheckoutForm(state => ({...state, [name]: value }))
    }
  }
  
  async function handleOnSubmitCheckoutForm() {

    const res = await axios.post("http://localhost:3001/store", {
      shoppingCart: shoppingCart,
      user: checkoutForm, 
      
    })
    .then((e) => {
      console.log(e.data.purchase.order)
      setReceipt({
        id: e.data.purchase.id, 
        name: e.data.purchase.name, 
        email: e.data.purchase.email,
        order: e.data.purchase.order, 
        total: e.data.purchase.total
      })
      console.log(receipt)
      setShoppingCart([])
      setCheckoutForm({name: "", email: ""})
      setSuccess(true)
      
    })
    .catch(() => {
      console.log("err")
      setError("Error")
      setSuccess(false)
    })
    
  }


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar 
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
            success={success}
            receiptId={receipt.id}
            receiptName={receipt.name}
            receiptEmail={receipt.email}
            receiptOrder={receipt.order}
            receiptTotal={receipt.total}
          />
          <Routes> 
            <Route path="/" element={
              <Home 
                products={products} 
                handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemFromCart={handleRemoveItemFromCart} 
                search={search} 
                setSearch={setSearch}
                shoppingCart={shoppingCart}/>
                }/>
            <Route path="/products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
