const navbarLinks=[
  {
    section:"Inicio",
    active:true,
    link:"#"
  },
  {
    section:"Productos",
    active:false,
    link:"#"
  },
  {
    section:"Galeria",
    active:false,
    link:"#"
  },
  {
    section:"Sobre nosotros",
    active:true,
    link:"#"
  }
]




export default function NavbarLink(){
  const linksMaped=navbarLinks.map((links,index)=>
    <li className="nav-item col-6 col-md-3 text-center" key={index}>
      <a className={links.active?"nav-link active overflow-visible":"nav-link disabled"} href={links.link}>{links.section}
      </a>
    </li>
  )
    return(
      <>
        {linksMaped}
      </>
  )}