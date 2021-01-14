import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import About from './About';
import Maps from './Maps';
import Future_Launches from './Future_Launches';
import Past_Launches from './Past_Launches';
import Latest_Launches from './Latest_Launches';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Maps" component={Maps}/>
        <Route path="/latest_launches" component={Latest_Launches}></Route>
        <Route path="/past_launches" component={Past_Launches}></Route>
        <Route path="/future_launches" component={Future_Launches}></Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
