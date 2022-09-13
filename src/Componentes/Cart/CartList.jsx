import Cart from "./Cart"
export default function CartList(props){
  return(
    <>
    {props.products.map((product,index)=>{
      return <Cart productsMaped={product} key={index} />})}
  </>
  )
}