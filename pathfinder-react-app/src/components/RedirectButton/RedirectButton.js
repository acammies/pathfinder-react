import React, { Component } from "react";
import { Button } from 'material-ui-next';
import "./RedirectButton.css";
// import { withStyles } from "material-ui/styles";

class RedirectButton extends Component {
    render() {
        return (
            <div className="Button">
                <Button variant="raised" color="secondary" href={this.props.link}>
                    Hello {this.props.name} !
                </Button>
            </div>
        );
  }
}

export default RedirectButton;
