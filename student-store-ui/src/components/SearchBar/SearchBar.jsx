import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./SearchBar.css"

export default function SearchBar(props) {

  let activeSearch = false;
    activeSearch = true;
    return (
        <div className="search-bar">
        <div className="input">
          <textarea type="text" name="search" placeholder="Search" value={props.search} onChange={props.handleOnChange}/>
        </div>
        <div>
        <ProductGrid
        shoppingCart={props.shoppingCart}
        activeSearch={activeSearch}
        search={props.search}
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      />
      </div>
    </div>
    )}