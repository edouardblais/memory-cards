import React from 'react'
import {style} from '../style/style'

const Button = ({
    name,
    onClick,
    }) => {
    
        return (
            <button style={style.button} onClick={onClick}>{name}</button>
        )
}

export default Button