import Item from "./Item"
export function ItemDetail(props){
return(
  <>
  {props.products.map((product,index)=>{
    return <Item productsMaped={product} key={index} />})}
  </>
)
}