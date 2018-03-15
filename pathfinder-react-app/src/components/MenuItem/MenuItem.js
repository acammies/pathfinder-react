import React, { Component } from 'react';
import './MenuItem.css';


class MenuItem extends Component {
    render () {
        return (
            <div>
			<nav id="menu">
				<ul className="links">
					<li><a href="index.php">Home</a></li>
					<li><a href="http://pathtest-pathfinder.6923.rh-us-east-1.openshiftapps.com/">Assessment</a></li>
					<li><a href="results.php">Results</a></li>
					<li><a href="admin.php">Admin</a></li>
					<li><a href="credits.php">Credits</a></li>
				</ul>
			</nav>
            </div>

        )
    }
}

export default MenuItem;