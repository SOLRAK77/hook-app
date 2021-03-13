import React, { useState } from 'react'

export const useCustomCouter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = ( factor = 1 ) => {
        setCounter(counter + factor)
    }

    const decrement = ( factor = 1) =>{
        setCounter(counter - factor)
    }

    return {
        counter,
        decrement,
        increment,
    }
}
