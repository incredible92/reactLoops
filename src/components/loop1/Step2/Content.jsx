import React, { useState } from 'react'

import './Content.scss'

function Contents() {
    const[optionIndex, setOptionIndex] = useState(0)
    const contents = "positive, negative, neutral".split(",")
    const currentChange = contents[optionIndex]
    
    const handleChange = (e) => {
        e.preventDefault()
        const input = e.target.content.value
        if (input < 1 || input > 3) {
            alert('invalid index')
            return
        }
    
        setOptionIndex(input-1)
    }

    return(
     <div>
      <div className="wrap">
        <form className="form-content" onSubmit={handleChange}>
            <input type="number" name="content"  placeholder="Enter tab index" />
            <button className="btn">Change tab</button>
        </form>
       
        <div className="contents">
            {contents.map((content, contentIndex) => {
                return (
                    <div>
                        <span
                            className={`options ${optionIndex===contentIndex  ? "selected" :""}`}
                            onClick={() => setOptionIndex(contentIndex)}
                            key={`content-opt ${contentIndex}`}
                        >
                            {content}
                        </span>
                    </div>  
                )
            })}
              
        </div>
        
             <span className="selected ">
                 {currentChange} content
            </span>
                
      </div>
    </div>
    )
}

export default Contents