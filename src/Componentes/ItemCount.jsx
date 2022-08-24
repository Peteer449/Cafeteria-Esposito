import React from "react";

export default function ItemCount(props){
  const [howMuchToAdd, setHowMuchToAdd] = React.useState(0)

  function handleHowMuchToAdd(event){
    event.target.value === "-" & howMuchToAdd > 0  && setHowMuchToAdd(howMuchToAdd - 1)
    event.target.value === "+" &howMuchToAdd < props.stock && setHowMuchToAdd(howMuchToAdd + 1)
  }
  return(
    <div className="d-flex align-items-center border p-2 border-primary rounded bg-white">
      <button className="btn btn-primary" onClick={handleHowMuchToAdd} value="-">-</button>
      <small className="flex-fill text-center fs-5">{howMuchToAdd}</small>
      <button className="btn btn-primary" onClick={handleHowMuchToAdd} value="+">+</button>
    </div>
  )
}