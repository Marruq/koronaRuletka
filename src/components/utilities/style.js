import styled from 'styled-components'
import { device } from '../utilities/device';

export const CustomButton = styled.button`
  padding: 10px 50px;
  background: linear-gradient(0deg,#cc8e35  0%,#ffb142  100% );
  border-radius:10px;
  outline: none;
  border-color: transparent;
  display: block;
  margin: 20px auto;
  width: 100%;
  color: white;
  font-size:30px;
  @media ${device.tablet} {
    width:auto;
   }
`