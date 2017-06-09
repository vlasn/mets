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
        color:'white'
    },
};

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        console.log('loggedin: ', this.props.loggedIn)
    }

    logout = () => {
        this.props.logout();
    };

    toggle() {
        this.props.toggleDropdown(this.props.dropdownOpen, this.props.loggedIn);
    }
    componentDidMount() {
        console.log('Logged in: ', this.props.loggedIn)

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
                            hoverColor = "#00CC33"
                            labelStyle ={labelStyles.headerButton}
                        />
                    </Link>
                    <Dropdown
                        open={this.props.dropdownOpen}
                        clicked={this.toggle.bind(this)}
                        display={
                            this.props.loggedIn === true ? (
                                <FlatButton
                                    style={styles.button}
                                    backgroundColor = {this.props.dropdownOpen ? 'black' : '#00CC33'}
                                    hoverColor = "black"
                                    onClick={this.toggle}>
                                    Nimi
                                </FlatButton>
                                ) : (
                                <Link to="/login">
                                <FlatButton
                                    style={styles.button}
                                    backgroundColor = {this.props.dropdownOpen ? 'black' : '#00CC33'}
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
                            hoverColor = '#7FFFC7'
                            disableTouchRipple = {true}
                            onTouchTap={this.props.logout}
                        />
                        <FlatButton
                            className="FlatButton--hover"
                            label="Seaded"
                            style={styles.dropdownButton}
                            backgroundColor = '#333333'
                            fullWidth={true}
                            hoverColor = '#7FFFC7'
                            disableTouchRipple = {true}
                        />
                    </Dropdown>

                    <h1>Metsahaldur 2.0</h1>
                </div>
            </MuiThemeProvider>
        );
    }
}
