import React from 'react'
import './ShareButton.css'
const ShareButton = ({onSubmit}) => {
    return (
        <div>
            <button className="button" onClick={onSubmit} >
                Share
            </button>
            
        </div>
    )
}

export default ShareButton
