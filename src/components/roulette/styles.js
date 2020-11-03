import styled, { css, keyframes } from 'styled-components'


const resizeAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    
    50% {
        transform: scale(1.2)
    }
    
    100% {
        transform: scale(1);
    }
`


export const Score = styled.h1`
    font-size: ${props => props.result ? "60px" : "30px"};
    margin: 60px 0;
    color: ${props => props.result ? "#ffb142" : "white"};
    
    ${props => props.result && css`

    animation: ${resizeAnimation} 2s linear infinite;
  `}
     
`
