import React from 'react'
import {style} from '../style/style'

const Image = ({src, onClick}) => {

    return (
        
        <img style={style.image} alt='climber' src={src} onClick={onClick}></img>
    )
}

export default Image