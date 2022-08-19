
export default function CartWidget(){
  return(
    <>
    <button className="d-flex bg-transparent">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIid3UPy5EURzF8Q8FCgURNY0FSMQaDInKVqxBZgMqyRTCCqaU0NuBckaFkjwKf4r7S7yMZNz7vCfhJLf7/s45N/eXy3/RG97jDLoIeK0FPGO1ixAY1oKansu64exEwHELJafefgY30WS3wHQJ9zG3/x18GOCwIKAfM1c58DKepM3ayODXUQW/ldtoEI36Gex5sKe55rAZQw9YmMJtS80rrJUEwLX81TwqNV/BXYZxhTPMlwachMGFtLqtalH6Ll7kbVGx5vCo2TeRrQN5b9A4oHPt4RZj9Frgvmjs89qjn3CT3/WvqSe1G2GnBe4P6wMWynZC39nrkQAAAABJRU5ErkJggg==" alt="carrito" width="30px" height="30px" className="align-self-center ms-auto"/>
      <h4 className="bg-black rounded-circle p-1">0</h4>
    </button>
    </>
  )
}