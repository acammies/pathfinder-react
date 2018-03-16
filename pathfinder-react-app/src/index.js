import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from "react-router/";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { BrowserHistory } from "react-router/BrowserHistory/";
// import routes from "./routes";
import './index.css';
import App from './App';
import Home from './containers/Home';
import Memes from './containers/Memes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
//   <Router history routes={routes} />,
  <Router>
        <div>
            {/* <Route path='/' component={App}/> */}
            <Route path='/' component={Home}/>
            <Route path='/Memes' component={Memes}/>
        </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
