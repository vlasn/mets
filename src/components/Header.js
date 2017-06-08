import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Dropdown from './Dropdown'
const css = require("./Header.scss");

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const labelStyles = {
    headerButton: {
        color: 'white'
    }
}

const styles = {
    headerButton: {
        float: 'left',
        padding: '0px 10px 0px 10px',
        height: '45px',
        display:'inline-block',
        boarderRadius:'0px',
    },
    dropdownButton: {
        display:'block',
        color:'white'
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
                <div className = "Header__wrapper">
                    <FlatButton
                        label="Avaleht"
                        style={styles.headerButton}
                        backgroundColor= "black"
                        hoverColor = "#00CC33"
                        labelStyle ={labelStyles.headerButton}
                    />
                    <Dropdown>
                            <FlatButton
                                label="Logi välja"
                                style={styles.dropdownButton}
                                backgroundColor = '#00CC33'
                                fullWidth={true}
                                hoverColor = 'black'
                            />
                            <FlatButton
                                label="Seaded"
                                style={styles.dropdownButton}
                                backgroundColor = '#00CC33'
                                fullWidth={true}
                                hoverColor = 'black'
                            />
                    </Dropdown>

                    <h1>Metsahaldur 2.0</h1>
                </div>
            </MuiThemeProvider>
        );
    }
}
