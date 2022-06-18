import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid";
import "./CatFilter.css"

export function CatFilter(props) {
  var buttonClassName = props.isActive ? "active" : "notActive";
  return (
    <div className="row">
            <ul className="category-menu open">
                <li className={buttonClassName} >
                    <button onClick={props.onClick}>{props.label}</button>
                </li>
            </ul>
    </div>
    
  )
}
