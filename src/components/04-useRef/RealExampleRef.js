import React, { useState} from 'react'
import {MultipleHooksUseRef} from '../03-HookExamples/MultipleHooksUseRef'
import './effects.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>useRef caso real</h1>
            <hr/>
            {!show && <MultipleHooksUseRef  /> }
            <button
                onClick={() => {
                    setShow(!show)
                }}>
                show/hide
            </button>
        </div>
    )
}
