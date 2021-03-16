import React, {useState, useEffect} from 'react'


import './Animation.scss'

 function Animation() {
     const[horizontal, setHorizontal] = useState(0);
     const[vertical, setVertical] = useState(0)
    

     useEffect(() => {
        const event = document.querySelector("body");
        event.addEventListener("mousemove", (e) => {
          setVertical(e.clientX / 90);
          setHorizontal(e.clientY / 90);
        });

        return () => {
            event.removeEventListener("mousemove", () => { });
          };
        }, []);

    //      const setEvent = e => setDirection({horizonatal :e.clientX, vertical:e.clientY})
    //      window.addEventListener('mousemove', setEvent)
    //      return () => {
    //          window.removeEventListener('mousemove', setEvent)
    //      }
    //  }, [direction])
    
    return (

        <div className="bg6">
            <div className="aniwrap">
                <span className="main-content"  style={{
          transform: `rotateX(${horizontal}deg) rotateY(${vertical}deg)`
        }}></span>
            </div>
        </div>
    )
}

export default Animation