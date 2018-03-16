import React, { Component } from 'react';
// import MenuItem from '../MenuItem/MenuItem';
import './TopBar.css';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom';



class TopBar extends Component {
    render() {        
        return <div className="bannerTop">
            <header id="header">
                <Link to= '/' className="logo">
                    Pathfinder
                </Link>
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