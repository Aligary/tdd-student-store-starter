import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid 
        products={props.products} 
        handleAddItemToCart={props.handleAddItemToCart} 
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      />
      <div className="about">
        <div className="content">
          <h3>About</h3>
        </div>
        <div className="summary">
          <div className="text">
            <p>
              The codepath student store offers great products at great prices from a great team and for a great cause.
            </p>
            <p>
              We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
            </p>
            <p>
            All proceeds go towards bringing high quality CS education to college students around the country.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
