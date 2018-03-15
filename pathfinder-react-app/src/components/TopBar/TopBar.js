import React, { Component } from 'react';
// import MenuItem from '../MenuItem/MenuItem';
import './TopBar.css';
import MenuItem from '../MenuItem/MenuItem';



class TopBar extends Component {
    render() {        
        return <div className="bannerTop">
            <header id="header">
              <a className="logo" href="#">
                Pathfinder
              </a>
              <nav>
                <br /><br /><br /><br />
                <a href="#menu">
                    Menu
                    {/* Fix me later, rewrite nicely */}
                    <MenuItem />
                </a>
                
              </nav>
            </header>
          </div>;
    }
}

export default TopBar;