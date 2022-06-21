import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./SearchBar.css"

export default function SearchBar(props) {

  let activeSearch = false;
    console.log(2, props.search)
    activeSearch = true;
    return (
        <div className="search-bar">
        <div className="input">
          <textarea type="text" name="search" placeholder="Search" value={props.search} onChange={props.handleOnChange}/>
        </div>
        <div>
        <ProductGrid
        activeSearch={activeSearch}
        search={props.search}
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
      />
      </div>
    </div>
    )}