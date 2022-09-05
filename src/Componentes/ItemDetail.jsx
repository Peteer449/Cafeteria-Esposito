import ItemCount from "./ItemCount"
export function ItemDetail({productsMaped}){
  const {name,price,picture,description,stock}=productsMaped
return(
  <>
    <div className={ stock<1?"col without-stock" : "col"}>
      <div className="card" id="item">
        <img src={picture} className="rounded-start border" alt={name} />
        <div className="card-right rounded-end border">
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
    </div>
  </>
)
}