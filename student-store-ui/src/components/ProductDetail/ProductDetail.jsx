import * as React from "react"
import "./ProductDetail.css"
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"


export default function ProductDetail(props) {
  let [product, setProduct] = useState();

  let { productId } = useParams();

  
  async function getProduct() {
    const res = await axios.get("https://codepath-store-api.herokuapp.com/store/" + productId)
    .then((e) => {
      <h1 className="loading">Loading...</h1>
      setProduct(e.data.product)
    }).catch(() => {
      setProduct(null)
    })
  }
  getProduct() 

  return (
    <div className="product-detail">
      {
        product!=null ? 
        <ProductView  
          product={product} 
          productId={productId}
          quantity=""
          handleAddItemToCart={props.handleAddItemToCart} 
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        /> : <NotFound />
      }
    </div>
  )
}
