import { useParams } from "react-router-dom"

export default function Produto(props){

  const {id} = useParams()
  return (
    <div>
      <h2>Página detalhe do produto</h2>
      <span>Id Produto: {id}</span>
    </div>
  )
}