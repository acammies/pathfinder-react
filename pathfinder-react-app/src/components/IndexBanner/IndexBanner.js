import React, { Component } from "react";
import "./IndexBanner.css";
import bannerVideo from './banner.mp4';
import { Player } from "video-react";



class IndexBanner extends Component {

    
    render() {
        return (
            <div className = "IndexBanner">
                <section id="banner">
                    <div className="inner">
                        <h1>Pathfinder</h1>
                        <p>Pathfinder is an application assessment which can quickly assist a customer with creating a strategy for containerisation of their applications.</p>
                    </div>
                    <Player>
                        {/* playsInLine */}
                        {/* "autoplay" : true, */}
                        {/* height='100px'  */}
                        <source src={bannerVideo}/>
                    </Player> 
                    {/* <video autoplay loop muted playsinline src={bannerVideo} alt='video'></video> */}
                </section>
            </div>
        );
  }
}

export default IndexBanner;
