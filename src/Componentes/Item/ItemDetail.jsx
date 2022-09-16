import ItemCount from "./ItemCount"

export function ItemDetail({productsMaped}){
  const {name,price,picture,description,stock}=productsMaped
return(
  <>
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={picture} className="img-fluid rounded-start" alt={name}/>
        </div>
        <div className="col-md-8">
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
              item={productsMaped.data}
              stock={stock}
              />
            </div>
        </div>
      </div>
    </div>
  </>
)
}