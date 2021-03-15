import React, {useRef} from 'react'
import { useFetchUseRef } from '../../Hooks/useFetchUseRef'
import { useCustomCouter } from '../../Hooks/useCustomCouter'

import './effects.css'

export const MultipleHooksUseRef = () => {

    const {counter, increment} = useCustomCouter(1);

    //const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    const {loading, data, error} = useFetchUseRef(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0]
    console.log(author, quote)

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>   
                <div className="row">
                    <div className="col-4">
                        <button 
                            className="btn btn-primary"
                            onClick={ () => increment(1) }>Siguiente Quote</button>
                    </div>
                </div>
                

                {
                    loading ?
                    (                        
                        <div className="alert alert-info text-center animate__animated animate__bounce animate__slower">
                        Loading...
                        </div>
                    )
                    :
                    (
                        <figure className="text-end animate__animated animate__fadeIn 4s">
                            <blockquote className="blockquote">
                                <p>{quote}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">{author}</cite>
                            </figcaption>
                        </figure>
                    )
                }

        </div>                
    )


}

