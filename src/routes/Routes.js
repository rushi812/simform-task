import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { DashboardContainer } from '../modules/dashboard'
import { LoginContainer } from '../modules/login'
import { ProfileContainer } from '../modules/profile'
import Auth from './Auth'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Auth(DashboardContainer)} />
      <Route path='/profile' component={Auth(ProfileContainer)} />
      <Route path='/login' component={LoginContainer} />
    </Switch>
  )
}

export default Routes
