import React from 'react'
import { CustomButton } from "./style";


export const Button = (props) => {
    return (
        <CustomButton onClick={props.click}>{props.text}</CustomButton>
    )
}

