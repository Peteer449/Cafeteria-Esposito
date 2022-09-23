import Item from "./Item"
export default function ItemList(props){
  return(
    <>
      {props.products.map((product)=>{
        return <Item productsMaped={product} key={product.id} />})}
    </>
  )
}