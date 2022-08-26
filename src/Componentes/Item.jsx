import "./Item.css"
import ItemCount from "./ItemCount"

    export default function Item({productsMaped}){
      const {name,price,picture,description,stock,index}=productsMaped
  return(
    <>
      <div className="col" key={index}>
        <div className={stock<1?"card without-stock":"card"} id="item">
          <img src={picture} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
            <div className="d-flex">
              <p className="text-muted flex-grow-1">${price}</p>
              <p className="text-muted">Stock: {stock}</p>
            </div>
            <ItemCount
            stock={stock}
            onAdd=""
            />
          </div>
        </div>
      </div>
    </>
  )
}