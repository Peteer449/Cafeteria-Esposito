export default function NavbarLink(props){
    return(
      <li className="nav-item col-6 col-md-3 text-center">
        <a className={props.active?"nav-link active overflow-visible":"nav-link disabled"} href={props.link}>{props.section}
        </a>
      </li>
  )}