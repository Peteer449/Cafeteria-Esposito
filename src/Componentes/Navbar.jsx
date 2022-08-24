import NavbarLink from "./NavbarLinks"
import CartWidget from "./CartWidget"
import {navbarLinks} from "../productsData"
import React from "react"
import "./Navbar.css"

export default function Navbar(){
  const links = navbarLinks.map(links=>{
    return(
      <NavbarLink
      section = {links.section}
      active = {links.active}
      link = {links.link}
      key = {links.id}
      />
    )
  })
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
          <div className="navbar-header ms-auto me-auto"><h1 type="button" className="navbar-brand">Via Villate</h1></div>
          <div className="navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav flex-row flex-wrap d-flex">
              {links}
            </ul>
            <CartWidget />
          </div>
      </div>
    </nav>
  )
}