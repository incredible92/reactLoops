import React, { useState } from "react";

import "./Toggle.scss";

function Toggle() {
  const [ToggleSwitch, setToggleSwitch] = useState(Array(5).fill(false));

  const triggerSwitch = (index) => {
    
    setToggleSwitch(
       
        ToggleSwitch.map((toggle, toggleIndex) => {
          if (index === toggleIndex) {
            return (toggle = !toggle);
          }
          return Boolean(Math.round(Math.random() * 1))
      })
    )
  }

  

  return (
    <div className="bg3">
      <div className="toggle-bg">
        <div className="toggleBox">
        {toggleSwitch.map((toggle, index) => (
          <div
            onClick={() => setToggleSwitch(index)}
            key={`toggle_switch_${index}`}
            className={`toggle ${toggle ? "active" : ""}`}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
export default Toggle;
