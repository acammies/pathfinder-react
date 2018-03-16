import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from "react-router/";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { BrowserHistory } from "react-router/BrowserHistory/";
// import routes from "./routes";
import './index.css';
import App from './App';
import Home from './containers/Home';
import Results from './containers/Results';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
//   <Router history routes={routes} />,
  <Router>
        <div>
            <Route path='/' component={App}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Results' component={Results}/>
        </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
