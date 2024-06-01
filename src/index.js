import React from "react"
import ReactDom from "react-dom/client"
import "./style.css"
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import Products from "./components/Products"
import About from "./components/About"
import Footer from "./components/Footer"



const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <div>
    <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Products></Products>
    <About></About>
    <Footer></Footer>
  </div>
)
