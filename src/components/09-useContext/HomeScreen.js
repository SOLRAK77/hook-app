import React, {useContext} from 'react'
import {UserContext} from './UserContext'

export const HomeScreen = () => {

    /*En el context uso la destructuracion y solo traigo el user */
    const {user} = useContext(UserContext)

    console.log(user);

    return (
        <div>
            <h1>Home Page</h1>
            <hr/>
            <pre>
                {JSON.stringify(user,null,4)}
            </pre>
        </div>
    )
}
