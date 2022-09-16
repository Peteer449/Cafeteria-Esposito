import Galery from "./Galery"
export default function GaleryList(props){
  return(
    <>
      {props.pictures.map((picture)=>{
      return <Galery productsMaped={picture.data} key={picture.id} />})}
    </>
  )
}