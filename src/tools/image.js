import React from 'react'

const Image = ({src, onClick}) => {

    return (
        
        <img alt='climber' src={src} onClick={onClick}></img>
    )
}

export default Image