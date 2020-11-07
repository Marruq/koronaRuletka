import styled, { css, keyframes } from 'styled-components'
import { device } from '../utilities/device'

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
    text-align: center;
    color: ${props => props.result ? "#ffb142" : "white"};
  //   ${props => props.result && css`
  //
  //   animation: ${resizeAnimation} 2s linear infinite;
  // `}

`

export const InfoModal = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: #ffb142;
    display:flex;
    justify-content: center;
    transition: 300ms ease;
    align-items: center;
    opacity: 1;
    color: white;
    div {
        display: flex;
        align-items: center;
        flex-direction:column;
        background: #cc8e35;
        width:100%;
        justify-content:center;
        
    }
    p {
    font-size: 3rem;
    text-align:center;
    }
    h2 {
        display:inline;
        font-size:3rem;
    }
    svg {
        height:200px;
        width:200px;
        fill:white;
    }
    @media ${device.tablet} {
        opacity: 0.9;
        div {
            display: flex;
            flex-direction:row;
        }
        span {
            font-size:3rem;
            font-weight:bold;
        }
        h2 {
            display:inline;
            font-size:5rem;
        }
        svg {
            height:200px;
            width:200px;
        }
    }
`
