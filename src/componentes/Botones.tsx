import styled from "styled-components";

const ContainerButtons = styled.div`
    display: flex;
`

const StyledButton = styled.button`
    color:#c3c4c6;
    width: 50%;
    height: 2.6rem;
    margin:10px;

    &:hover {
        color:#808080;
        border: 2px solid black ;
    }
`;

type ButtonsProps = {
    handlePrevious: () => void;
    handleNext: () => void;
}

const Botones: React.FC<ButtonsProps> = ({ handlePrevious, handleNext }) => {
    return (
        <div>
            <ContainerButtons>
                <StyledButton onClick={handlePrevious}>Anterior</StyledButton>
                <StyledButton onClick={handleNext}>Següent</StyledButton>
            </ContainerButtons>
        </div>
    );
}

export default Botones;
