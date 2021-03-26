import React, { useState } from "react";

import "./Data.scss";

function Data() {
  const methods = "Choose title, Choose description, Confirm data".split(", ");
  const [nextIndex, setNextIndex] = useState(0);

  const nextStep = (index) => {
    if (index === 2 && nextIndex === 0) return;
    setNextIndex(index);
  };

  const next = () => setNextIndex(nextIndex + 1);
  const previous = () => setNextIndex(nextIndex - 1);

  return (
    <div className="bg4">
      <div className="dataWrap">
        <div className="container">
          {methods.map((method, index) => (
            <div
              onClick={() => nextStep(index)}
              className={`step ${nextIndex >= index ? "active" : ""}`}
              key={`data_step-${index}`}
            >
              <span className="number">{index + 1}</span>
              <span className="step-title">{method}</span>
            </div>
          ))}
        </div>
        <div className="steps-contents">
          {nextIndex === 0 && (
            <div className="title">
              <p className="instruction">Choose title content</p>
              <button className="submit" onClick={next}>Submit title</button>
            </div>
          )}
          {nextIndex === 1 && (
            <div className="title">
              <p className="instruction">Choose description content</p>
              <button onClick={previous}>Back</button>
              <button onClick={next}>Submit description</button>
            </div>
          )}
          {nextIndex === 2 && (
            <div className="title">
              <p className="instruction">Are you happy now?</p>
              <button onClick={previous}>No, Go back</button>
              <button>Yes, Go ahead</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Data;
