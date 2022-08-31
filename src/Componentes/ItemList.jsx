import Item from "./Item"
export default function ItemList(props){
  return(
    <>
      {props.products.map((product,index)=>{
        return <Item productsMaped={product} key={index} />})}
    </>
  )
}