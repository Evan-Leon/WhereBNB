import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session_form.jsx/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

const App = () => (
  <div>
      <h1>App Component</h1>
      <Route path="/" component={NavBarContainer}/>
      <Route path="/signup" component={SignupContainer} />
  </div>
)

export default App;