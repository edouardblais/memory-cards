import React from 'react'

const Image = ({src, name, onClick}) => {

    return (
        
        <img alt='climber' src={src} name={name} onClick={onClick}></img>
    )
}

export default Image