import React, { useEffect, useRef, useState } from 'react'
import styles from "./style.module.scss"

export default function PriceRange(props) {
    let [state, setState] = useState({
        min: 0,
        max: 10000,
    })
    useEffect(()=>{
        props?.get({
            min: state.min,
            max: state.max
        })
    },[state])
    let minRef = useRef()
    let maxRef = useRef()
    let inputminRef = useRef()
    let inputmaxRef = useRef()
    const changeRange = (e) => {
        let minPrice = parseInt(minRef.current.value),
            maxPrice = parseInt(maxRef.current.value),
            inputMinPrice = parseInt(inputminRef.current.value),
            inputMaxPrice = parseInt(inputmaxRef.current.value),
            priceGap = 100;
        if ((maxPrice - minPrice >= priceGap) && (inputMaxPrice - inputMinPrice >= priceGap)) {
            switch (e.type) {
                case "MIN":
                    setState({ ...state, min: Number(e.payload) })
                    break
                case "MAX":
                    setState({ ...state, max: Number(e.payload) })
                    break
                default:
                    return state
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.price_input}>
                <input type="number" className={styles.input_min} value={state.min} onChange={(e) => changeRange({ type: "MIN", payload: e.target.value })}
                    ref={inputminRef} />
                <input type="number" className={styles.input_max} value={state.max} onChange={(e) => changeRange({ type: "MAX", payload: e.target.value })}
                    ref={inputmaxRef} />
            </div>
            <div className={styles.slider}>
                <div className={styles.progress_left} style={{ right: (100 - (state.min / minRef.current?.max) * 100) + "%" }}></div>
                <div className={styles.progress} style={{ left: ((state.min / minRef.current?.max) * 100) + "%", right: 100 - (parseInt(state.max) / maxRef.current?.max) * 100 + "%" }}></div>
            </div>
            <div className={styles.range_input}>
                <input type="range" className={styles.range_min} min="0" max="10000" value={state.min} step="100" ref={minRef} onChange={(e) => changeRange({ type: "MIN", payload: e.target.value })} />
                <input type="range" className={styles.range_max} min="0" max="10000" value={state.max} step="100" ref={maxRef} onChange={(e) => changeRange({ type: "MAX", payload: e.target.value })} />
            </div>
        </div>
    )
}
