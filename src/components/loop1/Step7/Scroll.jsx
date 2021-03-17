import React, { useRef, useEffect } from "react";

import "./Scroll.scss";

function Scroll() {
  const myRef = useRef(null);
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: myRef.current.offsetTop,
    });
  }, [myRef.current]);
  return (
    <div className="bg7">
      <div className="scrollWrap" ref={myRef}>
        {Array(4)
          .fill("")
          .map((element, elementIndex) => (
            <span
              key={`element-scroll_${elementIndex}`}
              className="scrollElement"
            />
          ))}

      </div>
    </div>
  );
}
export default Scroll;
