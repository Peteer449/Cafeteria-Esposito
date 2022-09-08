import {Link} from "react-router-dom"
export default function GaleryDropdown(){
  return(
    <div className="dropdown mt-3 ms-3 me-3 row">
      <button className="btn btn-secondary dropdown-toggle col-xs-12 col-sm-4 col-lg-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Categorias
      </button>
      <ul className="dropdown-menu col-xs-12 col-sm-4 col-lg-2" aria-labelledby="dropdownMenuButton1">
        <li><Link className="dropdown-item" to="/galeria">Todo</Link></li>  
        <li><Link className="dropdown-item" to="/galeria/cakes">Tortas</Link></li>
        <li><Link className="dropdown-item" to="/galeria/pastry">Pasteleria</Link></li>
        <li><Link className="dropdown-item" to="/galeria/boxes">Desayunos y boxes</Link></li>
      </ul>
    </div>
  )
}