import React, { useState } from 'react'

import './Toggle.scss'

 function Toggle() {
    const[Toggle, setToggle] = useState(false)
    
    const triggerSwitch = () => {
        setToggle( !Toggle )
    }
   
    return (
        <div className="switch-box">
                <div 
                onChange={triggerSwitch}
                className={`box-1 green ${Toggle ? 'wrg-toggle--checked' : ''}`} >
                    <div className="box-2 toggle"></div>
                </div>
                <div className="box-1">
                    <div class="box-2"></div>
                </div>
                <div className="box-1 green">
                    <div className="box-2"></div>
                </div>
                <div className="box-1">
                    <div className="box-2"></div>
                </div>
                <div className="box-1 green">
                    <div className="box-2"></div>
                </div>
            
        </div>
    )
}
export default Toggle