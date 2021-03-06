import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Pages from './Pages'

const Router = () => {
    return(
        <React.Suspense fallback={<h4>Loading....</h4>}>
            <Switch>
                <Route path='/home' component={Pages.Home}/>
                <Redirect from='*' to='/home' component={Pages.Home}/>
            </Switch>
        </React.Suspense>
    )
}
export default Router