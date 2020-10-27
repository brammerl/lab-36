import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MainContainer from '../../containers/MainContainer';
import AppProvider from '../../providers/appProvider';


export default function App() {
  return (
    <>
      <Router>
        <AppProvider> 
          <Switch>
            <Route exact path='/' component={MainContainer}/>
          </Switch>
        </AppProvider>
      </Router>
    </>
  );
}
