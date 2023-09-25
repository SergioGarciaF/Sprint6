import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.p<{ isSelected: boolean }>`
  text-align: center;
  padding: 0.8rem;
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
  background: ${({ isSelected }) => (isSelected ? 'salmon' : 'white')};
`;

interface EscenaProps {
  texto: string;
  id: number;
  currentIndex: number;
}

const Escena: React.FC<EscenaProps> = ({ texto, id, currentIndex }) => {
  const isSelected = id === currentIndex;

  return (
    <div>
      <StyledBox isSelected={isSelected}>
        {texto}
      </StyledBox>
    </div>
  );
};

export default Escena;
