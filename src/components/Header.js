import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const labelStyles = {
    headerButton: {
        color: 'white'
    }
}

const styles = {
    headerDropdown: {
        float: 'right',
        margin:'10px',
        padding: '0px 10px 0px 10px',
        height: '45px',
        display:'inline-block',
        boarderRadius:'0px',
    },

    headerButton: {
        float: 'left',
        margin:'10px',
        padding: '0px 10px 0px 10px',
        height: '45px',
        display:'inline-block',
        boarderRadius:'0px',
    },
    container: {
        padding: '1px 0px 50px 0px',
        textAlign:'center',
        width:'100vw',
        //position: 'fixed',
        //zIndex: '1',
    },

};

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className = "Header__wrapper" style={styles.container}>
                    <FlatButton 
                        label="Avaleht"
                        style={styles.headerButton}
                        backgroundColor= "black"
                        hoverColor = "#00CC33"
                        labelStyle ={labelStyles.headerButton}
                        
                    />
                    <FlatButton
                        onTouchTap={this.handleTouchTap}
                        label="Henry"
                        style={styles.headerDropdown}
                        backgroundColor= "#00CC33"
                        hoverColor = "#009933"
                        labelStyle ={labelStyles.headerButton}
                        
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                    >
                        <Menu>
                            <MenuItem primaryText="Seaded" />
                            <MenuItem primaryText="Logi välja" />
                        </Menu>
                    </Popover>
                    <h1>Metsahaldur 2.0</h1>
                </div>
            </MuiThemeProvider>
        );
    }
}