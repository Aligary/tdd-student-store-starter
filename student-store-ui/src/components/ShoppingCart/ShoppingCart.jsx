import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
  console.log(props.shoppingCart)

  let subTotal = 0;
  let tax = 0;
  let total = 0;
    //console.log(1,prodName)

    props.shoppingCart.map((e) => {
      subTotal += e.quantity * props.products[e.itemId - 1].price
    })

    tax = subTotal*0.0875

    total = tax + subTotal;

    return (
      <div className="shopping-cart">
        <div className="top">
          <h3>Shopping Cart</h3>
        </div>

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
                  <span className="flex-2 cart-product-quantity">{e.quantity}</span>
                  <span className="flex-2 cart-product-price">${(props.products[e.itemId - 1].price).toFixed(2)} </span>
                  <span className="flex-2 cart-product-subtotal">${(e.quantity * props.products[e.itemId - 1].price).toFixed(2)} </span>
                </div>
              ))
            }
          </div>
          <div className="receipt">
            <div className="receipt-subtotal">
              <span className="label">Subtotal</span>
              <span/>
              <span/>
              <span className="center subtotal">${(subTotal).toFixed(2)}</span>
            </div>
            <div className="receipt-taxes">
              <span className="label">Taxes</span>
              <span></span>
              <span></span>
              <span className="center">${(tax).toFixed(2)}</span>
            </div>
            <div className="receipt-total">
              <span className="label">Total</span>
              <span/>
              <span/>
              <span className="center total-price">${(total).toFixed(2)}</span>
            </div>
          </div>
        </div>
        : 
        <div className="noItemMsg">
          No items added to cart yet. Start shopping now!
        </div>
      }
      
      </div>
    )
    
}
