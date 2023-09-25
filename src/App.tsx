import React, { useState } from 'react';
import historia from './componentes/historia.json';
import Escena from "./componentes/Escena";
import { Container } from './componentes/Container';
import Botones from './componentes/Botones';

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % historia.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex) => (currentIndex - 1 + historia.length) % historia.length);
  }

  return (
    <div>
      <Container>
        <Botones handleNext={handleNext} handlePrevious={handlePrevious} />
        {historia.map((linea) => (
          <Escena key={linea.id} texto={linea.frase} id={linea.id} currentIndex={currentIndex} />
        ))}
      </Container>
    </div>
  );
}

export default App;
