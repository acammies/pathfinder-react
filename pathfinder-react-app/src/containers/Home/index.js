import React, { Component } from "react";
import Button from "material-ui-next";
import "./Home.css";
import TopBar from "../../components/TopBar/TopBar";
import IndexBanner from "../../components/IndexBanner/IndexBanner";
import RedirectButton from "../../components/RedirectButton/RedirectButton";
import CTA from "../../components/CTA/CTA";
import CardAsButton from "../../components/CardAsButton/CardAsButton";
import Bubble from "../../components/Bubble/Bubble";
import ComboChart from "../../components/ComboChart/ComboChart";
import GridHome from "../../components/GridHome/index";
import Grid from 'material-ui-next/Grid';
import { Link } from "react-router-dom";
import questionnaire from "../../images/questionnaire.png"


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <TopBar />
        <IndexBanner />
        {/* Below returns a material-ui grid, passes in Card Button Components as props, You can add anything in here and it''ll resize */}
        <GridHome gridContent={[
            <CardAsButton subtitle="insert subtitle here" title="RUN THE ASSESSMENT QUESTIONNAIRE" link="http://pathtest-pathfinder.6923.rh-us-east-1.openshiftapps.com/" image={questionnaire} />,
            <CardAsButton subtitle="insert subtitle here" title="RESULTS" link="/Memes" image="https://www.computing.co.uk/w-images/57a163e3-9c1c-4ff0-b52e-e893c1138628/3/RedHatlogo470313-580x358.jpg"/>,
            <CardAsButton subtitle="insert subtitle here" title="ADMINISTRATION" link="https://www.google.co.uk/search?q=mesut+ozil&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXua2wqu7ZAhUGaRQKHU0gDagQ_AUICygC&biw=950&bih=907" />,
            <h1>AAAHH</h1>
        ]}
            
        />
        <CTA />
        <Bubble />
        <ComboChart />
      </div>
    );
  }
}

export default Home;
