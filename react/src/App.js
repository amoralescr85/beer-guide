import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ShowFormContainer from './Containers/ShowFormContainer';

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
