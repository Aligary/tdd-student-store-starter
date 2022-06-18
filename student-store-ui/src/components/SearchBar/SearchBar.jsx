import * as React from "react"
import "./SearchBar.css"

export default function SearchBar(props) {


  return (
    <nav className="sub-navbar">
        <div className="content">
            <div className="row">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search" />
                </div>
            </div>
        </div>

        
    </nav>
  )
}