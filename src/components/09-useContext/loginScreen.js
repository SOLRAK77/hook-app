import React, {useContext} from 'react'
import {UserContext} from './UserContext'

export const LoginScreen = () => {

    const {user,setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Login Page</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={ ()=> setUser(
                        {
                        id:1,
                        nameUser:'Carlos Castillo',
                        emailUser:'ccastillo@imp.com'
                        }
                    )}
            >

                Login
            </button>
            <pre>
                {JSON.stringify(user,null,4)}
            </pre>
        </div>
    )
}
