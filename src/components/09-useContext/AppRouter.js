import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import {AboutScreen} from './AboutScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <div>
                    <Switch>
                        <Route path="/about" component={AboutScreen} />

                    </Switch>
                </div>
            </div>
        </Router>        
    )
}
