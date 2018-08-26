import * as React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Route from 'components/Route'

import Home from './Home'
import NotFound from './NotFound'
import Posts from './Posts'
import Users from './Users'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
