import React from "react";
import "../App.css"
import { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChangeAction } from "../store/ColorChange";
import { changeTextColorActions } from "../store/textColor";
import { UpperCaseFn } from "../fn/UpperCaseFn";

function ChangeFn(){

    const dispatch = useDispatch()
    
    const color = useSelector(state => state.bgColor.color)
    const colorVal = createRef()

    const change = () => {
        dispatch(colorChangeAction.changeC(colorVal.current.value))
    }

    const reset = () => {
        dispatch(colorChangeAction.resetC())

    }

    const tColor = useSelector(state => state.textColor.color)
    const tcolorVal = createRef()

    const changeT = () => {
        dispatch(changeTextColorActions.changeT(tcolorVal.current.value))
    }

    const resetT = () => {
        dispatch(changeTextColorActions.resetT())
    }
    let uColor = UpperCaseFn(color)
    let uTColor = UpperCaseFn(tColor)


    document.body.style.backgroundColor = color
    document.body.style.color = tColor

    return(
        <div className="changing">
            <div className="bgChange">
            <h1>Color Changing</h1>
            <h2>{uColor}</h2>
            <input ref={colorVal}></input>
            <button onClick={change}>Change</button>
            <button onClick={reset}>Reset</button>
            </div>
            <div className="textChange">
            <h1>Text Color Changing</h1>
            <h2>{uTColor}</h2>
            <input ref={tcolorVal}></input>
            <button onClick={changeT}>Change</button>
            <button onClick={resetT}>Reset</button>
            </div>
        </div>
    )
    }

export default ChangeFn