import styled  from 'styled-components'
import { device } from '../utilities/device';

export const Nav = styled.nav`
    bottom:0;
    width:100vw;
    height:5rem;
    position: fixed;
    background-color: #282c34;
    transition: 200ms ease;
    
    @media ${device.tablet} { 
    top:0;
    width: 5rem;
    height: 100vh;
        &:hover {
            width:16rem;
        span {
            display:inline;
            transition: opacity 600ms ease;
        }
    }
  }
`

export const List = styled.ul`
    list-style: none;
    padding:0;
    margin:0;
    display:flex;
    flex-direction:row;
    align-items:center;
    height: 100%;
    li {
        width: 100%;
    }
    // li:last-child {
    //     margin-top: auto;
    // }
    a {
        display: flex;
        justify-content:center;
        align-items: center;
        height: 5rem;
        color:#cc8e35;
        text-decoration:none;
        filter: grayscale(100%) opacity(0.7);
        transition: 600ms ease;
        text-transform:uppercase;
        font-weight:bold;
        &:hover {
            filter: grayscale(0%) opacity(1);
            background:#2f3542;
        }
    }
    span {
        display:none;
        margin-left: 1rem;
    }
    svg {
        min-width: 2rem;
        margin: 0 0.5rem;
        height: 2rem;
    }
    .cls-1 {
        fill:#cc8e35;
    }
    .cls-2 {
        fill:#ffb142;
    }
    #ruletka-outer-2 .cls-2 {
        fill:#282c34;
    } 
    .cls-1, .cls-2 {
        transition: 600ms ease;
    }
    @media ${device.tablet} {
        flex-direction:column;
        a {
            justify-content:initial;
        }
        svg {
            min-width:2rem;
            margin: 0 1.5rem;
        } 
    }
`
