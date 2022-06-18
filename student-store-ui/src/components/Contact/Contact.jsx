import * as React from "react"
import "./Contact.css"

export default function contact(props) {
  return (
    <div className="contact">
        <h3>Contact Us</h3>
        <div className="summary">
            <ul class="info"> 
                <li>
                    <span className="label">
                        Email
                        :
                    </span>
                    <span>code@path.org</span>
                </li>
                <li>
                    <span className="label">
                        Phone
                        :
                    </span>
                    <span>1-800-CODEPATH</span>
                </li>
                <li>
                    <span className="label">
                        Address
                        :
                    </span>
                    <span>123 Fake Street, San Francisco, CA</span>
                </li>
                <li>
                    <span>Socials: </span>
                    <img/>

                </li>
            </ul>

        </div>
    </div>
  )
}


