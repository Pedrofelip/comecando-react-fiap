import Button from "./components/Button/Button"
import { iconButton } from "./components/IconButton/IconButton"
import Cachorro from './assets/cachorrinho-de-oculos.jpg'
function App() {
  const appName = "Meu app"
  const user = {
    nome : 'pedro',
    imagem: Cachorro
  }
  const products = [
    {id: 8, name: "banana", value: "10"},
    {id: 9, name: "maça", value: "12"},
    {id: 10, name: "pera", value: "8"}
  ]
  return(
    <>
      <h1>{appName}</h1>
      <img src={user.imagem} alt= {user.nome}/>
      <p>{user.nome}</p>
      <Button/>
      <ul>
      {products.map(product =>(
        <li>{product.id} {product.name} {product.value}</li>
      ))}
    </ul>
    </>
    
  )
}
export default App
