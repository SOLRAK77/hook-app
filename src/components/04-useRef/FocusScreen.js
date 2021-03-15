import React, { useRef } from 'react'
import './effects.css'

export const FocusScreen = () => {

    const refInput = useRef();
    console.log(refInput);

    const handleBtnClk = () => {
        //document.querySelector('input').focus();
        //document.querySelector('input').select()
        refInput.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input type="text"
                ref={refInput}
                placeholder="Su nombre"
                className="form-control"/>
            
            <button
                className="btn btn-outline-primary mt-3"
                onClick={handleBtnClk}
            >Focus</button>
        </div>        
    )
}
