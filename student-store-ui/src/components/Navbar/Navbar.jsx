import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {

  // const productsByCategory =
  //   Boolean(activeCategory) && activeCategory.toLowerCase() !== "all categories"
  //     ? products.filter((p) => p.category === activeCategory.toLowerCase())
  //     : products

  // const productsToShow = Boolean(searchInputValue)
  //   ? productsByCategory.filter((p) => p.name.toLowerCase().indexOf(searchInputValue))
  //   : productsByCategory
    
  return (
    <nav className="navbar">
        <Logo />
    </nav>
  )
}

