import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0, 
        y: 0
    })

    const {x,y} = coords

    const mouseMov = (e) => {
        const coord = { 
            x: e.x, 
            y: e.y
        }        
        setCoords(coord)
    }

    useEffect(() => {
        window.addEventListener('mousemove',mouseMov);
        return () => {
            //console.log('componente desmontado')
            window.removeEventListener('mousemove',mouseMov);
        }
    }, [])

    return (
        <div className="Message--contain">
            <h1>Soy Genial!!!</h1>
            <p>Coordenadas [x:{x},y:{y}]</p>
        </div>
    )
}
