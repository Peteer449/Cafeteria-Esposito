import CartList from "./CartList"
export function CartListContainer () {
  return(
    <>
      <div className="d-flex flex-wrap gap-3 p-3 justify-content-center">
        <CartList />
      </div>
    </>
  )

}