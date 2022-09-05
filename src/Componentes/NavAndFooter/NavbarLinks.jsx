import { Link } from "react-router-dom"

const navbarLinks=[
  {
    section:"Inicio",
    active:true,
    link:"/"
  },
  {
    section:"Productos",
    active:true,
    link:"/productos"
  },
  {
    section:"Galeria",
    active:true,
    link:"/galeria"
  },
  {
    section:"Sobre nosotros",
    active:false,
    link:"/sobreNosotros"
  }
]




export default function NavbarLink(){
  const linksMaped=navbarLinks.map((links,index)=>
    <li className="nav-item col-6 col-md-3 text-center" key={index}>
      <Link className={links.active?"nav-link active overflow-visible":"nav-link disabled"} to={links.link}>{links.section}
      </Link>
    </li>
  )
    return(
      <>
        {linksMaped}
      </>
  )}