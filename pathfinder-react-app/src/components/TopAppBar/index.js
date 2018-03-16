import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const MenuDropDown = () => (
    <div>
    <IconMenu
        iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
    </div>
    )

class TopAppBar extends Component {

    render () {
        return (
            <div>
                <AppBar
                    title="Pathfinder"
                    iconElementRight={<MenuDropDown />}
                />
            </div>
        )
    }
}

export default TopAppBar;