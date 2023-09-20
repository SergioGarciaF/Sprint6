import historia from './componentes/historia.json'
import Escena from "./componentes/Escena"

function App() {

  return (
      <div>
        {historia.map((linea, index) => (
        <Escena key={index} texto={linea.frase}/>
      ))}
      </div>
  )
}

export default App
