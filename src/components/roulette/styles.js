import styled from 'styled-components'




export const Score = styled.h1`
    font-size: ${props => props.result ? "60px" : "30px"};
    margin: 60px 0;
    color: ${props => props.result ? "#ffb142" : "white"};
`