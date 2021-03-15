import React, {useState, useEffect} from 'react'

import './Design.scss'

 


function Design() {
     const contents = ['design','Frontend', 'backend', 'testing','stop'] 

     const [letter, setLetter] = useState('') 
     const [letterIndex, setLetterIndex] = useState(0)


     useEffect(() => {
         let currentContent = contents[letterIndex]
         console.log('re-rendering');
         let cLP = 1;  // cLP means currentLetterPosition

         const interval = setInterval(() => {
            if (cLP > currentContent.length) {
                setLetter("");
                const checkIndex = letterIndex===3? 0 : letterIndex + 1
                setLetterIndex(checkIndex)
        
            } 
            else {      
            //   if (currentContent.trim() === "stop") {
            //     setLetterIndex(0)
            //   } else {
                  cLP++
                  setLetter(currentContent.substr(0, cLP));
                  
            //   }
            }
          }, 300);
         return () => {
            clearInterval(interval);
         }
     }, [letterIndex])


    return (
        <div className="bgWrap">

            <h1 className="content">We can help you with {letter}
            <span className="cursor" />
            </h1>
           
        </div>
    )
}

export default Design