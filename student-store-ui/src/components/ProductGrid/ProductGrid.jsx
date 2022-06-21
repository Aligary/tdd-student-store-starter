import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {

  let currentCat=""
  if(props.activeSearch)
  {
    currentCat = props.search.toLowerCase() === ""
    ?  props.products
    : props.products.filter((e) => {
    return (e.name.toLowerCase().includes(props.search.toLowerCase())) ? e : null
  })
  }
  else
  {
    currentCat = props.category.toLowerCase() === "all categories"
    ?  props.products
    : props.products.filter((e) => {
      return (e.category.toLowerCase()==props.category.toLowerCase()) ? e : null
    })
  }
  console.log(5,currentCat)

  return (
    <div className="content">
      <h1>Best Selling Products</h1>
        <div className="product-grid">
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
        })}
        </div>
      
    </div>
  )
}
