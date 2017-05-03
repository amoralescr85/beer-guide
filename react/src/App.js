import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ReviewShowContainer from './containers/ShowFormContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' >
        <Route path='/beers/:id' component={ShowFormContainer} />
      </Route>
    </Router>
  );
}

export default App;
