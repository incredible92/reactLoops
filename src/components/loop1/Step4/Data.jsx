import React, {useState} from "react";

import "./Data.scss";

function Data() {
  const methods = "Choose title, Choose description, Confirm data".split(", ");
  const [nextIndex, setNextIndex] = useState(0);

  const nextStep = (index) => {
    if (index === 2 && nextIndex === 0) return;
    setNextIndex(index);
  }
  return (
    <div className="bg4">
      <div className="dataWrap">
        <div className="container"></div>
      </div>
    </div>
  );
}

export default Data;
