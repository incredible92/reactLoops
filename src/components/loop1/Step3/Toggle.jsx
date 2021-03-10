import React from 'react'

import './Toggle.scss'

 function Toggle() {

    const ToggleChange = e => {
        console.log(e);
      }
    return (
        <div className="switch-box">
                 <div class="box-1 green" onClick={e => ToggleChange(e)}>
                <div class="box-2 toggle"></div>
                </div>
                <div class="box-1">
                    <div class="box-2"></div>
                </div>
                <div class="box-1 green">
                    <div class="box-2"></div>
                </div>
                <div class="box-1">
                    <div class="box-2"></div>
                </div>
                <div class="box-1 green">
                    <div class="box-2"></div>
                </div>
            
        </div>
    )
}
export default Toggle