import React from 'react'

const ProgressBar = ({progress}) => {
    return (
        <div style={{maxWidth:'70%'}}>
            <div style={{width:`${progress>100?100:progress}%`}} className='progress-bar'>
            </div>
        </div>
    )
}

export default ProgressBar
