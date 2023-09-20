import historia from './componentes/historia.json';
import Escena from './componentes/Escena';

type HistoriaItem = {
  frase: string;
};

function App(): React.ReactElement {
  return (
    <div>
      {historia.map((linea: HistoriaItem, index: number) => (
        <Escena key={index} texto={linea.frase} />
      ))}
    </div>
  );
}

export default App;