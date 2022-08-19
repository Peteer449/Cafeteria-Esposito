export default function NavbarLink(props){
    return(
      <li className="nav-item">
        <>
          <a className={props.active?"nav-link active":"nav-link disabled"} href={props.link}>{props.section}
          </a>
        </>
    </li>
  )}