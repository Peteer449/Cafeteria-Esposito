import NavbarLink from "./NavbarLinks"
<<<<<<< HEAD

export default function Navbar(){
  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Via Villate</a>
=======
import CartWidget from "./CartWidget"
import productsData from "../productsData"

export default function Navbar(){
  const links = productsData.navbarLinks.map(links=>{
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="...">Via Villate</a>
>>>>>>> 2cc6204 (Creando componentes para los productos)
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
<<<<<<< HEAD
            <NavbarLink 
            section="Inicio"
            active={true}
            link="#"
            />
            <NavbarLink 
            section="Productos"
            active={false}
            link="#"
            />
            <NavbarLink 
            section="Galeria"
            active={false}
            link="#"
            />
            <NavbarLink 
            section="Sobre nosotros"
            active={true}
            link="#"
            />
            <NavbarLink 
            section="Redes sociales"
            active={true}
            dropdown={true}
            />
          </ul>
=======
            {links}
          </ul>
          <CartWidget/>
>>>>>>> 2cc6204 (Creando componentes para los productos)
        </div>
      </div>
    </nav>
  )
}