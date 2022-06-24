import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
  console.log(props.shoppingCart)

  let prodName = ""
  let prodQuantity = ""
  props.shoppingCart ?
  
  props.shoppingCart.map((e) => {
    props.products.map((element) => {
      if (e.itemId == element.id) {
        prodName = element.name
        prodQuantity = e.quantity
      }
    })
    //console.log(1,prodName)

    return (
    <div className="shopping-cart">
      <div className="cart-product-name">
        <p>{prodName}</p>
      </div>
      <div className="cart-product-quantity">
        <p>{prodQuantity}</p>
      </div>
    </div>
  )
  })
  : null
  return (
    <div className="notification"> 
      "No items added to cart yet. Start shopping now!"
    </div>
    
  )
  
}
