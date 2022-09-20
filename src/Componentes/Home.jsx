import { Link } from "react-router-dom"
import "./Home.css"
export default function Home(){
  return(
    <div>
      <div className="text-center m-2">
        <h1>Via Villate</h1>
        <h3>Helados artesanales y cafe de especialidad</h3>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/viavillate-54604.appspot.com/o/Tortas.jpg?alt=media&token=2f17a038-3b64-48c4-82d7-9bb1baefc01e" className="d-block" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Productos</h5>
              <Link to={"/productos"}><button className="btn btn-primary">Ver mas</button></Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/viavillate-54604.appspot.com/o/Boxes.jpg?alt=media&token=482aa16a-5cb8-4f4d-8d32-bb33727f6ae7" className="d-block" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Galeria</h5>
              <Link to={"/galeria"}><button className="btn btn-primary">Ver mas</button></Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}