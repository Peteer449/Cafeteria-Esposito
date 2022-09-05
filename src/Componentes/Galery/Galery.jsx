export default function Galery({productsMaped}){
  const {picture,name} = productsMaped
  return(
  <div className="card">
    <img src={picture} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
    </div>
  </div>  
  )
}