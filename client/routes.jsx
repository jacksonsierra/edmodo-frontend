import React from 'react'
import {
  IndexRedirect,
  Route,
} from 'react-router'
import App from 'client/shared/containers/App'
import Assignments from 'client/assignments/containers/Assignments'
import Assignment from 'client/assignments/containers/Assignment'

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="assignments" />
    <Route path="assignments" component={Assignments}>
      <Route path=":id" component={Assignment} />
    </Route>
  </Route>
)
