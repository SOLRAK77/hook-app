import React from 'react'

export const ShowIncrement = React.memo(({increment, factor}) => {

    console.log('Me volvi a generar...')

    return (
        <button 
            className="btn btn-primary"
            onClick={() => {
                increment(factor);
            }}
        >
            +
        </button>
    )
    }
)
