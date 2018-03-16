import React, {Component} from 'react';
import Grid from "material-ui-next/Grid";
import Paper from "material-ui-next/Paper";

class GridHome extends Component {
    render() {
        return(
            <div>
                <Grid
                    container
                    className='GridContainer'
                    alignItems='center'
                    direction='row'
                    justify='space-around'
                    >
                    {this.props.gridContent.map(card => (
                        <Grid item>
                            {card}
                        </Grid>
                    ))}
                    </Grid>
            </div>
        )
    }
}

export default GridHome;