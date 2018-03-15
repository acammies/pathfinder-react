import React, { Component } from "react";
import { Button } from "material-ui-next";
// import { FlatButton} from "material-ui/FlatButton";
import Card from 'material-ui/Card';
import {CardHeader} from 'material-ui/Card';
import {CardActions} from 'material-ui/Card';
import {CardMedia} from 'material-ui/Card';
import {CardTitle} from 'material-ui/Card';
import {CardText} from 'material-ui/Card';
// import {Card} from 'material-ui/Card';
// import { CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CardAsButton extends Component {
    render() {
        return (
            <div className="cardStyle">
                <Card>
                    <CardHeader>
                        title="Title is {this.props.name}"
                        subtitle="get my memes"
                    </CardHeader>
                    <Button variant="raised" color="secondary" href={this.props.link}>
                        Hello {this.props.name}!
                    </Button>

                </Card>
                {/* <Card>
                    <CardHeader
                        title="URL Avatar"
                        subtitle="Subtitle"
                    />
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <Button label="Action1" />
                        <Button label="Action2" />
                    </CardActions>
                </Card> */}
            </div>
        );
    };
};

export default CardAsButton;
