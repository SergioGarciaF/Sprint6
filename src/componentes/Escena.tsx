import styled from 'styled-components';

const EscenaStyled = styled.p`
  text-align: center;
  padding: 0.8rem;
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
`;

interface EscenaProps {
  texto: string;
}

const Escena: React.FC<EscenaProps> = ({ texto }) => {
  return (
    <EscenaStyled>
      {texto}
    </EscenaStyled>
  );
};

export default Escena;