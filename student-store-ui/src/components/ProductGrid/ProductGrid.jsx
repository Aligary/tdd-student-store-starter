import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {
        props.products.map((e, index) => {
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
