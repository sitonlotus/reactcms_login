import React from 'react';
import {Provider} from 'react-redux';
import store from "./Store/index.js";
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/home.js';
import Login from './Pages/login.js';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{height:'100%'}}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
