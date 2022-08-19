import Item from "./Item"
import productsData from "../productsData"
export default function ItemsListContainer (props) {
  const products = productsData.products.map(product=>{
    const {id, name, price, picture, description} = product
    return (
      <Item 
      id={id} 
      name={name} 
      price={price} 
      picture={picture} 
      description={description}
      key={id}
      />
    )
  })
  return(
    <>
      <h1 className="text-center">{props.greetings}</h1>
      <div className="card-group row-cols-4 offset-2">
        {products}
      </div>
    </>
  )
}