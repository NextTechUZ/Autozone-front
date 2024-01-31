import React from 'react'
import './index.scss';
function ProgressBar({progress}) {

    return (
        <div className="progress-bar">
            <div style={{width:`${progress}%`}} className="progress-bar__item"></div>
        </div>
    )
}

export default ProgressBar
