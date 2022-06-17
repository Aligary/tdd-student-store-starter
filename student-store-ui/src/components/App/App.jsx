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
import axios from "axios"

export default function App() {
  let [products, setProducts] = useState([]);
  let [isFetching, setIsFetching] = useState(false);
  let [error, setError] = useState("");
  let [isOpen , setIsOpen ] = useState(false);
  let [shoppingCart , setShoppingCart ] = useState([]);
  let [checkoutForm  , setCheckoutForm  ] = useState("");



  async function getProducts() {
    setIsFetching(true)
    const res = await axios.get("https://codepath-store-api.herokuapp.com/store")
    .then((e) => {
      setProducts(e.data.products)
    })
    .catch((error) => {
      setError(error)
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
    
  }

  function handleRemoveItemFromCart(productId) {
    
  }

  function hadnleOnCheckoutFormChange(name, value) {

  }
  
  function handleOnSubmitCheckoutForm() {
    
  }

  console.log(1,products)
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <nav>
            <Navbar />
          </nav>
          <Sidebar />
          <Routes> 
            <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}/>
            <Route path="/products/:productId" element={<ProductDetail />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
