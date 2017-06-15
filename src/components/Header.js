import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import { Link } from 'react-router-dom'
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
        color:'black',
        textDecoration:'none',
        padding: '0px 20px 0px 20px',
        height: '45px'
    },
};

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
    }

    logout = () => {
        this.props.logout();
    };

    toggle() {
        this.props.toggleDropdown(this.props.dropdownOpen, this.props.loggedIn);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className = "Header__wrapper">
                    <Link to={"/"}>
                        <FlatButton
                            label='Avaleht'
                            style={styles.headerButton}
                            backgroundColor= "black"
                            hoverColor = "#9BFCD3"
                            labelStyle ={labelStyles.headerButton}
                        />
                    </Link>
                    <Dropdown
                        open={this.props.dropdownOpen}
                        clicked={this.toggle.bind(this)}
                        display={
                            this.props.loggedIn === true ? (
                                <FlatButton
                                    style={styles.dropdownButton}
                                    backgroundColor = {this.props.dropdownOpen ? 'black' : '#9BFCD3'}
                                    hoverColor = "black"
                                    onClick={this.toggle}>
                                    {this.props.nameToDisplay()}
                                </FlatButton>
                                ) : (
                                <Link to="/login">
                                <FlatButton
                                    style={styles.dropdownButton}
                                    backgroundColor = {this.props.dropdownOpen ? 'black' : '#9BFCD3'}
                                    hoverColor = "black"
                                    onClick={this.handleClick}>
                                    Logi sisse
                                </FlatButton>
                                </Link>
                                )
                        }
                    >
                        <FlatButton
                            className="FlatButton--hover"
                            label="Logi välja"
                            style={styles.dropdownButton}
                            backgroundColor = '#333333'
                            fullWidth={true}
                            hoverColor = '#9BFCD3'
                            disableTouchRipple = {true}
                            onTouchTap={this.props.logout}
                        />
                        <FlatButton
                            className="FlatButton--hover"
                            label="Seaded"
                            style={styles.dropdownButton}
                            backgroundColor = '#333333'
                            fullWidth={true}
                            hoverColor = '#9BFCD3'
                            disableTouchRipple = {true}
                        />
                    </Dropdown>

                    <h1>Metsahaldur 2.0</h1>
                </div>
            </MuiThemeProvider>
        );
    }
}
