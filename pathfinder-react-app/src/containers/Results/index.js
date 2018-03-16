import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Results extends Component {
    render() {
        return (
            <div>
                <h1>Get My Results</h1>
                <h1>Get My Results</h1>
                <h1>Get My Results</h1>
                <Link to='/Results/Graph'>
                    Clicky me for pretty Graph
                </Link>
            </div>
        )
    }
}

export default Results;