import * as React from "react"
import "./ProductCard.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import minus from '../img/minus.png'
import plus from '../img/plus.png'

export default function ProductCard(props) {
  let link = "/products/" + props.product?.id
  let id = props.product?.id
  let name = props.product?.name
  let price = (props.product?.price.toFixed(2))
  let image = props.product?.image
  let description = props.product?.description  
  let shoppingCart = props.shoppingCart
  let product = props.product
  let prodQuantity 
  

  shoppingCart
  ?
  shoppingCart.map((e) => {
    product.map((element) => {
      if (e.itemId == element.id) {
        prodQuantity = e.quantity
      }
    })
  })
  : null
  return (
    <div className="product-card">
      <h4 className="product-name">{name}</h4>
      <h4 className="product-price">${price}</h4>
      {
        props.showDescripton ? 
        <p className="product-description">{description}</p>
        :null
      }
      {
        <div className="media">
          <Link to={link}>
            <img src={image} alt={name} width="200" height="200"/>
          </Link>
        </div>
      }

      {
        <button className="add" onClick={() => props.handleAddItemToCart(id)}>
          <img src={plus} alt="plus" width="60"/>
        </button>
      }
      {
        <button className="remove" onClick={() => props.handleRemoveItemFromCart(id)}>
          <img src={minus} alt="plus" width="30"/>
        </button>
      }
      {
        <p className="product-quantity">{prodQuantity}</p>
      }

    </div>
  )
}
