import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/Dashboard'
import BillingCycles from '../billingCycle/BillingCycles'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingCycles' component={BillingCycles}/>
        <Redirect from='*' to='/'/>
    </Router>
)