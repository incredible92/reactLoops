import React from "react";

import "./Data.scss";

function Data() {
  return (
    <div>
      <div class="container">
        <div class="wrapper-1">
          <div class="content">
            <div class="one">1</div>
            <span class="title">Choose title</span>
          </div>

          <div class="content">
            <div class="two">2</div>
            <span class="description">Choose description</span>
          </div>

          <div class="content">
            <div class="three">3</div>
            <span class="data">Confirm data</span>
          </div>
        </div>

        <div class="wrapper-2">
          <span class="choose">Choose description content</span>
          <div class="submission">
            {/* <span class="back">Back</span> */}
            <span class="submit">Submit title</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
