import * as React from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar(props) {
  let open = props.isOpen
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={props.handleOnToggle}> X </button>
      {
        open ? 
        <div className="sidebarOpen">
          <ShoppingCart 
            isOpen={open}
            products={props.products}
            shoppingCart={props.shoppingCart}
          />
          <CheckoutForm 
            isOpen={open}
            products={props.products}
            shoppingCart={props.shoppingCart}
            checkoutForm={props.checkoutForm}
            handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
            success={props.success}
          />
        </div>
        :
        <div className="sidebarClosed"></div>
      }
    </section>
  )
}
