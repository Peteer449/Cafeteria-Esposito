import "./Galery.css"
export default function Galery({productsMaped}){
  const {picture,name} = productsMaped
  return(
    <img src={picture} className="img-thumbnail me-2 mb-2" id="image-galery"alt={name} />
  )
}