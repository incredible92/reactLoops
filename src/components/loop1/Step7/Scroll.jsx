import React,{useRef, useEffect} from "react";

import "./Scroll.scss";



function Scroll() {
  const myRef = useRef(null)
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: myRef.current.offsetTop,
    });
   
  }, [myRef.current])
  return (
    <div className="bg7">
      <div className="scrollWrap" ref={myRef}>
        <div className="scrollElement"></div>
      </div>
    </div>
  );
}
export default Scroll;
