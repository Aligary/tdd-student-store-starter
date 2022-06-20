import * as React from "react"
import "./SearchBar.css"

export default function SearchBar(props) {

  
  console.log(12, props.search)

  return (
    <div className="search-bar">
      <div className="input">
        <textarea type="text" name="search" placeholder="Search" value={props.search} onChange={props.handleOnChange}/>
      </div>
    </div>
  )
}