import React, {useRef, useLayoutEffect, useState} from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { useCustomCouter } from '../../Hooks/useCustomCouter'

import './effects.css'

export const Layout = () => {

    const refTag = useRef();
    const {counter, increment} = useCustomCouter(1);
    const [tagP, setTagP] = useState({})

    //const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0]

    useLayoutEffect(()=>{
        setTagP(refTag.current.getBoundingClientRect())
        //console.log(tagP);
    },[quote])
    
    //console.log(author, quote)

    return (
        <div>
            <h1>LayoutEffect - BreakingBad Quotes</h1>
            <hr/>   
                <div className="row">
                    <div className="col-4">
                        <button 
                            className="btn btn-primary mb-4"
                            onClick={ () => increment(1) }>Siguiente Quote</button>
                    </div>
                </div>
                

                {
                    <figure className="text-end animate__animated animate__fadeIn 4s">
                        <blockquote className="blockquote">
                            <p ref={refTag}>
                                {quote}
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite title="Source Title">{author}</cite>
                        </figcaption>
                    </figure>
                }
                <pre>
                {
                    JSON.stringify(tagP,null,3)
                }
                </pre>

        </div>                
    )


}

