import React from 'react'
import './index.scss'

function Logo({width="75",height="75"}) {
    return (
        <img className='logo'  width={width}
        height={height} src={require('../../img/autozone-logo.png')} alt="logo" />
    )
}

export default Logo
