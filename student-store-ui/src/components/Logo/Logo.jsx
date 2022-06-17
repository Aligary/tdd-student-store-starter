import * as React from "react"
import "./Logo.css"
import logo from '../img/logo.jpg'
import {Link} from "react-router-dom"

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/"> <img src={logo} width="25" alt="logo" /> </Link>
    </div>
  )
}
