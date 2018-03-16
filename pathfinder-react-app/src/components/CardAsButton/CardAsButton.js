import React, { Component } from "react";
import { Button } from "material-ui-next";
// import { FlatButton} from "material-ui/FlatButton";
import Card from 'material-ui/Card';
import {CardHeader} from 'material-ui/Card';
import {CardActions} from 'material-ui/Card';
import {CardMedia} from 'material-ui/Card';
import {CardTitle} from 'material-ui/Card';
import {CardText} from 'material-ui/Card';
import { Link } from "react-router-dom";

// import {Card} from 'material-ui/Card';
// import { CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CardAsButton extends Component {

    
    render() {
        const CardLayout = () => <Card>
            <CardHeader>
              title="Title is {this.props.title}" subtitle={this.props.subtitle}
            </CardHeader>
            <CardMedia >
              <img src={this.props.image} alt="" />
            </CardMedia>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
          </Card>;



        return (
            <div className="cardStyle">
                {/^https?:\/\//.test(this.props.link) ? 
                    <a href={this.props.link}>
                        <CardLayout/>
                    </a>  
                : 
                    <Link to={this.props.link}>
                        <CardLayout/>
                    </Link>
                }
                    
                </div>
        )
    };
};

export default CardAsButton;
