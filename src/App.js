import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from './config/routes'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        {routes.map((route) => {
          return (
            <Route 
              path={route.path}
              component={route.component}
              key={route.path}
            />
          )
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
