import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom"


export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          
        </main>
      </BrowserRouter>
    </div>
  )
}
