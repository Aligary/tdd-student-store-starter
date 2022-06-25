import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
  console.log(props.checkoutForm)
  return (
    <div className="checkout-form">
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input className="checkout-form-input" type="text" name="name" placeholder="Student Name" value={props.checkoutForm.name} onChange={(e) => {props.handleOnCheckoutFormChange(e.target.name, e.target.value)}}></input>

        </div>
      </div>

      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" value={props.checkoutForm.email} onChange={(e) => {props.handleOnCheckoutFormChange(e.target.name, e.target.value)}}></input>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="checkout-button" onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
        </div>
      </div>
      {props.success?
      <div className="success">
        Success!
      </div>
      :null}
      
    </div>
  )
}
