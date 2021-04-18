import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const user = {
        id : 1,
        codUser : 'ccastillo',
        nameUser : 'Carlos Castillo',
        emailUser : 'ccastillo.perez77@gmail.com'
    }

    return (    
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    )
}
