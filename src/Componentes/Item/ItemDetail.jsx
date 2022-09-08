import ItemCount from "./ItemCount"
export function ItemDetail({productsMaped}){
  const {name,price,picture,description,stock}=productsMaped
return(
  <>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={picture} class="img-fluid rounded-start" alt={name}/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
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