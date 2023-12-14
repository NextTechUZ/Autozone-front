import React from 'react'
import "./styles.scss";
import { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

function Range() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  function handleChangeRange(e){
    setMaxValue(e.maxValue)
    setMinValue(e.minValue)
  }
  function handleChangeInput(e) {
    e.preventDefault()
    setMinValue(e.minValue)
  }
    return (
        <div className="range-wrapper">
          <div className="range-status-wrapper">
            <p className="range-status">{minValue}</p>
            <p className="range-status">{maxValue}</p>
          </div>
          <MultiRangeSlider
          min={0}
          max={1000}
          minValue={minValue}
          maxValue={maxValue}
          canMinMaxValueSame={false}
          label={false}
          ruler={false}
          onInput={(e)=>handleChangeRange(e)}
          style={{ border: "none", boxShadow: "none", borderRadius:"0", padding:"16px 0px 34px 0px"}}
          className='range'
          barLeftColor="green"
          barInnerColor="#1d1d1d"
          barRightColor="#c53720"
          thumbLeftColor="transparent"
          thumbRightColor="transparent"
        />
       
        </div>
    )
}

export default Range
