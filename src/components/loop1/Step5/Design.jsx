import React, {useState, useEffect} from 'react'

import './Design.scss'

 


function Design() {
     const contents = ['design','Frontend', 'backend', 'testing','stop'] 

     const [letter, setLetter] = useState('') 
     const [letterIndex, setLetterIndex] = useState(0)


     useEffect(() => {
         let currentContent = contents[setLetterIndex]
         let cLP= 1;  // cLP means currentLetterPosition

         const interval = setInterval(() => {
            if (cLP > currentContent.length) {
              setTimeout(() => {
                setLetter("");
                cLP = 1
                setLetterIndex(letterIndex + 1)
              }, 1000)
            } else {
              setLetter(currentContent.substr(0, cLP));
      
              if (currentContent.trim() === "stop") {
                setLetterIndex(0)
              } else {
                cLP++
              }
            }
          }, 300);
         return () => {
            clearInterval(interval);
         }
     }, [setLetterIndex])


    return (
        <div className="bgWrap">
            <h1 className="content">We can help you with {letter}</h1>
            <span className="cursor" />
        </div>
    )
}

export default Design