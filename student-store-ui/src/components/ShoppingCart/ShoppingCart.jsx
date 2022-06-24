import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
  console.log(props.shoppingCart)

  let prodName = ""
  let prodQuantity = ""
    //console.log(1,prodName)

    return (
      <div className="shopping-cart">

      {
        props.shoppingCart.length > 0 ?

        <div className="CartTable">
          <div className="header">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>
            {
              props.shoppingCart.map((e) => (
                <div className="product-row">
                  <span className="flex-2 cart-product-name">{props.products[e.itemId - 1].name}</span>
                  <span className="flex-2 cart-product-quantity"> {e.quantity}</span>
                  <span className="flex-2 cart-product-price"> {(props.products[e.itemId - 1].price).toFixed(2)}</span>
                  <span className="flex-2 cart-product-subtotal"> {(e.quantity * props.products[e.itemId - 1].price).toFixed(2)}</span>
                </div>
              ))
            }
          </div>
        </div>
        : "No items added to cart yet. Start shopping now!"
      }
      
      </div>
    )
    
}
