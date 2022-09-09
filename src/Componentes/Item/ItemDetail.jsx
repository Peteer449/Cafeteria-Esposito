import ItemCount from "./ItemCount"
import Toastify from 'toastify-js'

export function ItemDetail({productsMaped}){
  const {name,price,picture,description,stock}=productsMaped
  function onAdd(cant,setVisibility){
    Toastify({
      text: `Se ${cant===1?"agrego":"agregaron"} ${cant} al carrito`,
      duration: 3000,
      newWindow: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(90deg, rgba(251,207,79,1) 0%, rgba(202,152,171,1) 100%)",
      },
      onClick: function(){}
    }).showToast();
    setVisibility(true)
  }
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
              stock={stock}
              onAdd={onAdd}
              />
            </div>
        </div>
      </div>
    </div>
  </>
)
}