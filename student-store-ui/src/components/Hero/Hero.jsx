import * as React from "react"
import "./Hero.css"
import heroImg from "../img/store.png"

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="intro">Welcome!</h1>
      <p className="intro">We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
      <img src={heroImg} className="hero-img"></img>
    </div>
  )
}
