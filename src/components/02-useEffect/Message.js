import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('componente montado')
        return () => {
            console.log('componente desmontado')
        }
    }, [])

    return (
        <div className="Message--contain">
            <h1>Soy Genial!!!</h1>
        </div>
    )
}
