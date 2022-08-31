import "./Item.css"
export default function Item({productsMaped}){
  const {name,price,picture,index}=productsMaped
  return(
    <>
      <div className="col" key={index}>
        <div className="card" id="item">
          <img src={picture} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title text-center fs-4">{name}</h5>
          </div>
          <div className="card-footer">
            <div className="d-flex">
              <small className="text-muted flex-grow-1 align-self-center fs-6">${price}</small>
              <button className="btn btn-primary">Ver mas</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}