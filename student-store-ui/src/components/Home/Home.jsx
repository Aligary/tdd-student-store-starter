import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SearchBar from "../SearchBar/SearchBar"
import { CatFilter } from "../CatFilter/CatFilter"
import { useState } from "react"

export default function Home(props) {

  const[selectedCategory, setSelectedCategory] = useState("all categories");
  const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"]
  let active;

  function handleOnSearchChange(e) {
    props.setSearch(e.target.value)
  }
  return (
    <div className="home">
      <Hero />
      <SearchBar 
        setSearch={props.setSearch} 
        search={props.search} 
        handleOnChange={handleOnSearchChange}
        products={props.products} 
        handleAddItemToCart={props.handleAddItemToCart} 
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />
      <div className="filter-card">
      {categories.map((e) => {
            active = (e == selectedCategory ? true : false)
            return <CatFilter 
                      handleAddItemToCart={props.handleAddItemToCart} 
                      handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                      products={props.products} 
                      key={e} 
                      label={e}
                      category={selectedCategory} 
                      isActive={active}
                      onClick={() => {
                        setSelectedCategory(e)
                        
                      }}
                      
                    />
        })}
      </div>
      {
        selectedCategory ? <ProductGrid 
        category={selectedCategory}
        products={props.products} 
        handleAddItemToCart={props.handleAddItemToCart} 
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />
      : null
      }
      
    </div>
  )
}
