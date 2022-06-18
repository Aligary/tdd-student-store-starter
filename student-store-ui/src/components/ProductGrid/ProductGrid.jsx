import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {

  let currentCat = props.category.toLowerCase() === "all categories"
  ?  props.products
  : props.products.filter((e) => {
    return (e.category.toLowerCase()==props.category.toLowerCase()) ? e : null
  })

  console.log(currentCat)
  return (
    <div className="product-grid">
      <h1>Best Selling Products</h1>
      {
        currentCat.map((e, index) => {
          return <ProductCard 
            key={index}
            product={e}
            productId={e.id}
            quantity=""
            handleAddItemToCart={props.handleAddItemToCart} 
            handleRemoveItemFromCart={props.handleRemoveItemFromCart}
            showDescription={false}
          />
        })
      }
    </div>
  )
}
