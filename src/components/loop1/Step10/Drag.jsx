import React, { useState } from "react";
import Draggable from "react-draggable";

import "./Drag.scss";

function Drag() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragEvent = (action) => {
    setPosition({ x: action.x, y: action.y });
  };

  return (
    <div className="bg10">
      <div className="dragWrap">
        <Draggable onDrag={(e, action) => dragEvent(action)}>
          <div className="dragElement"></div>
        </Draggable>
      </div>
    </div>
  );
}

export default Drag;
