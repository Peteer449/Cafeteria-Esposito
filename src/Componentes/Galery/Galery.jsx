export default function Galery({productsMaped}){
  const {picture,name} = productsMaped
  return(
    <img src={picture} className="img-thumbnail col-5 me-2 mb-2" alt={name} />
  )
}