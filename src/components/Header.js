import React from 'react';
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
        color:'white',
        height:'45px'
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
                        className="FlatButton--hover"
                        label="Avaleht"
                        style={styles.headerButton}
                        backgroundColor= "#333333"
                        hoverColor = "##7FFFC7"
                        labelStyle ={labelStyles.headerButton}
                    />
                    <Dropdown>
                        <FlatButton
                            className="FlatButton--hover"
                            label="Logi välja"
                            style={styles.dropdownButton}
                            backgroundColor = '#333333'
                            fullWidth={true}
                            hoverColor = '#7FFFC7'
                            disableTouchRipple = 'true'
                            
                        />
                        <FlatButton
                            className="FlatButton--hover"
                            label="Seaded"
                            style={styles.dropdownButton}
                            backgroundColor = '#333333'
                            fullWidth={true}
                            hoverColor = '#7FFFC7'
                            disableTouchRipple = 'true'
                        />
                    </Dropdown>

                    <h1>Metsahaldur 2.0</h1>
                </div>
            </MuiThemeProvider>
        );
    }
}
