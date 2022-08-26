import NavbarLink from "./NavbarLinks"
import CartWidget from "./CartWidget"
import "./Navbar.css"

export default function Navbar(){

  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
          <div className="navbar-header ms-auto me-auto"><h1 type="button" className="navbar-brand">Via Villate</h1></div>
          <div className="navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav flex-row flex-wrap d-flex">
              <NavbarLink/>
            </ul>
            <CartWidget />
          </div>
      </div>
    </nav>
  )
}