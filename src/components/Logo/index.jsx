import React from 'react'
import './index.scss'

function Logo() {
    return (
        <img className='logo'  width="58"
        height="58" src={require('../../img/autozone-logo.png')} alt="logo" />
    )
}

export default Logo
