import * as React from "react"
import "./CatFilter.css"

export function CatFilter(props) {
  return (
    <div className="row">
            <li>
                <button className="btn" onClick={props.onClick}>{props.label}</button>
            </li>
    </div>
  )
}
