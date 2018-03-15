import React, { Component } from 'react';
import Button from 'material-ui-next';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import IndexBanner from './components/IndexBanner/IndexBanner';
import RedirectButton from './components/RedirectButton/RedirectButton';
import CTA from './components/CTA/CTA'
import CardAsButton from './components/CardAsButton/CardAsButton';
import Bubble from './components/Bubble/Bubble';
import ComboChart from './components/ComboChart/ComboChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <IndexBanner />
        <CardAsButton name="Mesut" link="https://www.google.co.uk/search?q=mesut+ozil&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXua2wqu7ZAhUGaRQKHU0gDagQ_AUICygC&biw=950&bih=907"/>
        <CardAsButton name="Rob" link="https://www.google.com"/>
        <CardAsButton name="Aidan" link="http://pathtest-pathfinder.6923.rh-us-east-1.openshiftapps.com/"/>
        <CTA />
        <Bubble/>
        <ComboChart/>
      </div>
    )
  }
}

export default App;
