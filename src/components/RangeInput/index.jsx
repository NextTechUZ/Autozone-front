import React from 'react'
import "./styles.scss";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { price } from '../../store/store';

function Range({min,max,changeMin,changeMax}) {
  // const [minValue, setMinValue] = useState(min);
  // const [maxValue, setMaxValue] = useState(max);

  function handleChangeRange(e){
    changeMin(e.minValue)
    changeMax(e.maxValue)
  }
  // function handleChangeInput(e) {
  //   e.preventDefault()
  //   setMinValue(e.minValue)
  // }
    return (
        <div className="range-wrapper">
          <div className="range-status-wrapper">
            <p className="range-status">{min}</p>
            <p className="range-status">{max}</p>
          </div>
          <MultiRangeSlider
          min={price.min}
          max={price.max}
          minValue={min}
          maxValue={max}
          canMinMaxValueSame={false}
          label={false}
          ruler={false}
          onChange={(e)=>handleChangeRange(e)}
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
