import * as React from "react"
import "./ProductCard.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

export default function ProductCard(props) {
  let link = "/products/" + props.product?.id
  let id = props.product?.id
  let name = props.product?.name
  let price = (props.product?.price.toFixed(2))
  let image = props.product?.image
  let description = props.product?.description
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
        <button className="add" onClick={props.handleAddItemToCart(id)}>
          +
        </button>
      }
      {
        <button className="remove" onClick={props.handleRemoveItemFromCart(id)}>
          -
        </button>
      }
      {
        <p className="product-quantity">?</p>
      }

    </div>
  )
}
