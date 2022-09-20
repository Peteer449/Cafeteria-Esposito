import ItemCount from "./ItemCount"

export function ItemDetail(props){
return(
  <>
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.productsMaped.picture} className="img-fluid rounded-start" alt={props.productsMaped.name}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.productsMaped.name}</h5>
            <p className="card-text">{props.productsMaped.description}</p>
          </div>
          <div className="card-footer">
              <div className="d-flex">
                <p className="text-muted flex-grow-1">${props.productsMaped.price}</p>
                <p className="text-muted">Stock: {props.productsMaped.stock}</p>
              </div>
              <ItemCount
              item={props.productsMaped}
              itemId={props.productId}
              stock={props.productsMaped.stock}
              />
            </div>
        </div>
      </div>
    </div>
  </>
)
}