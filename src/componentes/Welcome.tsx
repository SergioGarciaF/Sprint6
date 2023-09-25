import { FC } from 'react';
import styled from 'styled-components';

const ContainerWelcome = styled.div`
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
`

const StyledButtonWelcome = styled.button`
    width: 25%;
    align-self: center;
    border: 0.1rem solid black;
    border-radius: 1rem;

    &:hover {
        background-color: #4e4d4d;
    }
`

interface WelcomeProps {
    onComenzar: () => void;
}

const Welcome: FC<WelcomeProps> = ({ onComenzar }) => {
    return (
        <ContainerWelcome>
            <h1>Benvingut a la historia del nostre heroi!</h1>
            <p>Fes click al botó per començar</p>
            <StyledButtonWelcome onClick={onComenzar}>Començar</StyledButtonWelcome>
        </ContainerWelcome>
    )
}

export default Welcome;
