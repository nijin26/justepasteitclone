import React from 'react'
import './Typing.css'
const Typing = ({handleInputChange}
    ) => {
    return (
        <div>
            <textarea onChange = {(e)=> handleInputChange(e.target.value) } className="textarea">
            </textarea>
            
        </div>
    )
}

export default Typing
