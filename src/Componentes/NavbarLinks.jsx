<<<<<<< HEAD
import DropdownLink from "./DropdownLinks"
export default function NavbarLink(props){
    return(
      <li className={props.dropdown?"nav-item dropdown":"nav-item"}>
        {props.dropdown?(
        <>
          <a className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">{props.section}</a>
          <div className="dropdown-menu">
            <DropdownLink
            section="Action"
            link="#"
            />
            <DropdownLink
            section="Another Action"
            link="#"
            />
            <DropdownLink
            section="Something else"
            link="#"
            />
          </div>
        </>
        ):(
        <>
          <a className={props.active?"nav-link active":"nav-link disabled"} href={props.link}>{props.section}
          </a>
        </>)}
=======
export default function NavbarLink(props){
    return(
      <li className="nav-item">
        <>
          <a className={props.active?"nav-link active":"nav-link disabled"} href={props.link}>{props.section}
          </a>
        </>
>>>>>>> 2cc6204 (Creando componentes para los productos)
    </li>
  )}